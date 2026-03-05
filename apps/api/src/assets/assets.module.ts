import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from '../prisma/asset.entity';

@Module({
  controllers: [AssetsController],
  providers: [AssetsService],
  imports: [TypeOrmModule.forFeature([Asset])],
})
export class AssetsModule {}