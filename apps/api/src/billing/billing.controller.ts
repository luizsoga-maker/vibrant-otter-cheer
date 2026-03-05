import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('plans')
  async getPlans() {
    return this.billingService.getPlans();
  }

  @Post('subscribe')
  @UseGuards(JwtAuthGuard)
  async subscribe(@Body() body: { plan: string; userId: string }) {
    return this.billingService.createSubscription(body.plan, body.userId);
  }

  @Post('webhook')
  async webhook(@Body() body: any) {
    return this.billingService.handleWebhook(body);
  }
}