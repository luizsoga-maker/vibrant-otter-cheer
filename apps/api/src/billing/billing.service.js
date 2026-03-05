"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BillingService = class BillingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getPlans() {
        return [
            {
                id: 'basic',
                name: 'Basic',
                price: 29,
                features: ['1 Site', 'Subdomain', 'Basic Editor'],
            },
            {
                id: 'pro',
                name: 'Pro',
                price: 79,
                features: ['3 Sites', 'Custom Domain', 'Advanced Editor', 'Blog'],
            },
            {
                id: 'premium',
                name: 'Premium',
                price: 199,
                features: ['10 Sites', 'Custom Domain', 'AI Blog', 'Priority Support'],
            },
        ];
    }
    async createSubscription(planId, userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error('User not found');
        }
        // Simplified - in production, integrate with Stripe
        const subscription = await this.prisma.billing.upsert({
            where: { userId },
            update: { plan: planId, status: 'ACTIVE' },
            create: {
                userId,
                plan: planId,
                stripeCustomerId: `customer_${userId}`,
                status: 'ACTIVE',
            },
        });
        return { subscription };
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BillingService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmlsbGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1QyxzREFBa0Q7QUFHM0MsSUFBTSxjQUFjLEdBQXBCLE1BQU0sY0FBYztJQUN6QixZQUE2QixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQztJQUV0RCxRQUFRO1FBQ04sT0FBTztZQUNMO2dCQUNFLEVBQUUsRUFBRSxPQUFPO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDO2FBQ2xEO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUM7YUFDbEU7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsR0FBRztnQkFDVixRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQzthQUN2RTtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ3JELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELG9EQUFvRDtRQUNwRCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNwRCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUU7WUFDakIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO1lBQ2pELE1BQU0sRUFBRTtnQkFDTixNQUFNO2dCQUNOLElBQUksRUFBRSxNQUFhO2dCQUNuQixnQkFBZ0IsRUFBRSxZQUFZLE1BQU0sRUFBRTtnQkFDdEMsTUFBTSxFQUFFLFFBQVE7YUFDakI7U0FDRixDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7QUE5Q1ksd0NBQWM7eUJBQWQsY0FBYztJQUQxQixJQUFBLG1CQUFVLEdBQUU7cUNBRTBCLDhCQUFhO0dBRHZDLGNBQWMsQ0E4QzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuLi9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCaWxsaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJpc21hOiBQcmlzbWFTZXJ2aWNlKSB7fVxuXG4gIGdldFBsYW5zKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnYmFzaWMnLFxuICAgICAgICBuYW1lOiAnQmFzaWMnLFxuICAgICAgICBwcmljZTogMjksXG4gICAgICAgIGZlYXR1cmVzOiBbJzEgU2l0ZScsICdTdWJkb21haW4nLCAnQmFzaWMgRWRpdG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3BybycsXG4gICAgICAgIG5hbWU6ICdQcm8nLFxuICAgICAgICBwcmljZTogNzksXG4gICAgICAgIGZlYXR1cmVzOiBbJzMgU2l0ZXMnLCAnQ3VzdG9tIERvbWFpbicsICdBZHZhbmNlZCBFZGl0b3InLCAnQmxvZyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdwcmVtaXVtJyxcbiAgICAgICAgbmFtZTogJ1ByZW1pdW0nLFxuICAgICAgICBwcmljZTogMTk5LFxuICAgICAgICBmZWF0dXJlczogWycxMCBTaXRlcycsICdDdXN0b20gRG9tYWluJywgJ0FJIEJsb2cnLCAnUHJpb3JpdHkgU3VwcG9ydCddLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlU3Vic2NyaXB0aW9uKHBsYW5JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogdXNlcklkIH0gfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgfVxuXG4gICAgLy8gU2ltcGxpZmllZCAtIGluIHByb2R1Y3Rpb24sIGludGVncmF0ZSB3aXRoIFN0cmlwZVxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucHJpc21hLmJpbGxpbmcudXBzZXJ0KHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgICAgdXBkYXRlOiB7IHBsYW46IHBsYW5JZCBhcyBhbnksIHN0YXR1czogJ0FDVElWRScgfSxcbiAgICAgIGNyZWF0ZToge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHBsYW46IHBsYW5JZCBhcyBhbnksXG4gICAgICAgIHN0cmlwZUN1c3RvbWVySWQ6IGBjdXN0b21lcl8ke3VzZXJJZH1gLFxuICAgICAgICBzdGF0dXM6ICdBQ1RJVkUnLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1YnNjcmlwdGlvbiB9O1xuICB9XG59Il19