import { Controller, Post, Get, UseGuards, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssetsService } from './assets.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard)
  @FileInterceptor('file')
  async upload(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type');
    }

    return this.assetsService.uploadFile(file);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllAssets() {
    return this.assetsService.getAllAssets();
  }
}