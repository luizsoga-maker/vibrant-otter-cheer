import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { SitesModule } from './sites/sites.module';
import { PagesModule } from './pages/pages.module';
import { AssetsModule } from './assets/assets.module';
import { BillingModule } from './billing/billing.module';
import { AiModule } from './ai/ai.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    SitesModule,
    PagesModule,
    AssetsModule,
    BillingModule,
    AiModule,
  ],
  controllers: [HealthController],
  providers: [PrismaService],
})
export class AppModule {}