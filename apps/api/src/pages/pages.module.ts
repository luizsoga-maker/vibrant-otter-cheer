import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './page.entity';
import { Section } from './section.entity';

@Module({
  controllers: [PagesController],
  providers: [PagesService],
  imports: [TypeOrmModule.forFeature([Page, Section])],
})
export class PagesModule {}