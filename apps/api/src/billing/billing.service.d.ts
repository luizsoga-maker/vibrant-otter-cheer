import { PrismaService } from '../prisma.service';
export declare class BillingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPlans(): {
        id: string;
        name: string;
        price: number;
        features: string[];
    }[];
    createSubscription(planId: string, userId: string): Promise<{
        subscription: any;
    }>;
}
