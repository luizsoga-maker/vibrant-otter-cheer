import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PagesController],
  providers: [PagesService, PrismaService],
})
export class PagesModule {}