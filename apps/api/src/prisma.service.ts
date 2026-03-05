import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  async $connect() {
    await super.$connect();
  }

  async $disconnect() {
    await super.$disconnect();
  }
}