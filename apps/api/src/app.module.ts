import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    TypeOrmModule.forRoot({
      type: 'postgresql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'saas_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: process.env.NODE_ENV === 'development',
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