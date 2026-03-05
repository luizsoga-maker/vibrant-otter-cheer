import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import Stripe from 'stripe';

@Injectable()
export class BillingService {
  private readonly stripe: Stripe;

  constructor(private readonly prisma: PrismaService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });
  }

  getPlans() {
    return [
      {
        id: 'basic',
        name: 'Basic',
        price: 29,
        features: ['1 Site', 'Subdomain', 'Basic Editor'],
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 79,
        features: ['3 Sites', 'Custom Domain', 'Advanced Editor', 'Blog'],
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 199,
        features: ['10 Sites', 'Custom Domain', 'AI Blog', 'Priority Support'],
      },
    ];
  }

  async createSubscription(planId: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    // Create Stripe customer if not exists
    let customer = await this.prisma.billing.findUnique({
      where: { userId },
    });

    if (!customer) {
      const stripeCustomer = await this.stripe.customers.create({
        email: user.email,
        metadata: { userId },
      });

      customer = await this.prisma.billing.create({
        data: {
          userId,
          plan: planId as any,
          stripeCustomerId: stripeCustomer.id,
          status: 'ACTIVE',
        },
      });
    }

    // Create subscription
    const subscription = await this.stripe.subscriptions.create({
      customer: customer.stripeCustomerId,
      items: [{ price: this.getPriceIdForPlan(planId) }],
    });

    return { subscription, customer };
  }

  async handleWebhook(event: any) {
    const { type, data } = event;

    switch (type) {
      case 'invoice.payment_succeeded':
        await this.handlePaymentSucceeded(data.object);
        break;
      case 'invoice.payment_failed':
        await this.handlePaymentFailed(data.object);
        break;
      case 'customer.subscription.deleted':
        await this.handleSubscriptionCancelled(data.object);
        break;
    }

    return { received: true };
  }

  private async handlePaymentSucceeded(invoice: any) {
    await this.prisma.billing.update({
      where: { stripeCustomerId: invoice.customer },
      data: { status: 'ACTIVE' },
    });
  }

  private async handlePaymentFailed(invoice: any) {
    await this.prisma.billing.update({
      where: { stripeCustomerId: invoice.customer },
      data: { status: 'PAST_DUE' },
    });
  }

  private async handleSubscriptionCancelled(subscription: any) {
    await this.prisma.billing.update({
      where: { stripeCustomerId: subscription.customer },
      data: { status: 'CANCELLED' },
    });
  }

  private getPriceIdForPlan(planId: string): string {
    const prices: Record<string, string> = {
      basic: process.env.STRIPE_PRICE_BASIC!,
      pro: process.env.STRIPE_PRICE_PRO!,
      premium: process.env.STRIPE_PRICE_PREMIUM!,
    };
    return prices[planId];
  }
}