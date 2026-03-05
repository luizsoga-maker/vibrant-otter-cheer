import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from '../prisma/billing.entity';
import { User } from '../prisma/user.entity';

@Module({
  controllers: [BillingController],
  providers: [BillingService],
  imports: [TypeOrmModule.forFeature([Billing, User])],
})
export class BillingModule {}