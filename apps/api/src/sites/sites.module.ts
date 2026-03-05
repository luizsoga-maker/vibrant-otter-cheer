import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from '../prisma/site.entity';
import { Page } from '../pages/page.entity';

@Module({
  controllers: [SitesController],
  providers: [SitesService],
  imports: [TypeOrmModule.forFeature([Site, Page])],
})
export class SitesModule {}