import { BillingService } from './billing.service';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    getPlans(): Promise<{
        id: string;
        name: string;
        price: number;
        features: string[];
    }[]>;
    subscribe(body: {
        plan: string;
        userId: string;
    }): Promise<{
        subscription: any;
    }>;
    webhook(body: any): Promise<{
        received: boolean;
    }>;
}
