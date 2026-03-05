import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from '../prisma/page.entity';
import { Section } from '../prisma/section.entity';
import { Asset } from '../prisma/asset.entity';

@Module({
  controllers: [PagesController],
  providers: [PagesService],
  imports: [TypeOrmModule.forFeature([Page, Section, Asset])],
})
export class PagesModule {}