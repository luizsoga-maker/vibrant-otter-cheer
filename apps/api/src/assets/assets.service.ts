import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AssetsService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadFile(file: any) {
    // For now, just store file metadata without S3
    const asset = await this.prisma.asset.create({
      data: {
        key: `assets/${Date.now()}-${file.originalname}`,
        url: `/uploads/${file.originalname}`, // Placeholder
        filename: file.originalname,
        size: file.size,
        type: file.mimetype.split('/')[0] as any,
      },
    });

    return asset;
  }

  async getAllAssets() {
    return this.prisma.asset.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });
  }
}