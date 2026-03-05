import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as AWS from 'aws-sdk';
import * as path from 'path';

@Injectable()
export class AssetsService {
  private readonly s3: AWS.S3;

  constructor(private readonly prisma: PrismaService) {
    this.s3 = new AWS.S3({
      endpoint: process.env.MINIO_URL,
      accessKeyId: process.env.MINIO_ACCESS_KEY,
      secretAccessKey: process.env.MINIO_SECRET_KEY,
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
    });
  }

  async uploadFile(file: Express.Multer.File) {
    const fileKey = `assets/${Date.now()}-${file.originalname}`;
    const fileUrl = `${process.env.MINIO_URL}/${fileKey}`;

    // Upload to S3/MinIO
    await this.s3.putObject({
      Bucket: process.env.S3_BUCKET,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    }).promise();

    // Save to database
    const asset = await this.prisma.asset.create({
      data: {
        key: fileKey,
        url: fileUrl,
        filename: file.originalname,
        size: file.size,
        type: file.mimetype.split('/')[0] as any,
      },
    });

    return asset;
  }
}