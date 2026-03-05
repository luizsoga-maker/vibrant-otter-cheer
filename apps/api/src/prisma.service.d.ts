import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    $connect(): Promise<void>;
    $disconnect(): Promise<void>;
}
