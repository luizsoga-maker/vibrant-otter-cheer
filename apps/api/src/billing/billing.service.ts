import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BillingService {
  constructor(private readonly prisma: PrismaService) {}

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

    // Simplified - in production, integrate with Stripe
    const subscription = await this.prisma.billing.upsert({
      where: { userId },
      update: { plan: planId as any, status: 'ACTIVE' },
      create: {
        userId,
        plan: planId as any,
        stripeCustomerId: `customer_${userId}`,
        status: 'ACTIVE',
      },
    });

    return { subscription };
  }
}