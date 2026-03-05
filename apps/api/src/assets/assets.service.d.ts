import { PrismaService } from '../prisma.service';
export declare class AssetsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    uploadFile(file: any): Promise<any>;
    getAllAssets(): Promise<any>;
}
