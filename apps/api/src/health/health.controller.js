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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let HealthController = class HealthController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async check() {
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            return {
                status: 'healthy',
                database: 'connected',
                timestamp: new Date().toISOString(),
            };
        }
        catch (error) {
            return {
                status: 'unhealthy',
                database: 'disconnected',
                error: error?.message || String(error),
                timestamp: new Date().toISOString(),
            };
        }
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "check", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HealthController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWFsdGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFDakQsc0RBQWtEO0FBRzNDLElBQU0sZ0JBQWdCLEdBQXRCLE1BQU0sZ0JBQWdCO0lBQzNCLFlBQTZCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBR2hELEFBQU4sS0FBSyxDQUFDLEtBQUs7UUFDVCxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFBLFVBQVUsQ0FBQztZQUV0QyxPQUFPO2dCQUNMLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixRQUFRLEVBQUUsV0FBVztnQkFDckIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO2FBQ3BDLENBQUM7UUFDSixDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNwQixPQUFPO2dCQUNMLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO2FBQ3BDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF0QlksNENBQWdCO0FBSXJCO0lBREwsSUFBQSxZQUFHLEdBQUU7Ozs7NkNBa0JMOzJCQXJCVSxnQkFBZ0I7SUFENUIsSUFBQSxtQkFBVSxFQUFDLFFBQVEsQ0FBQztxQ0FFa0IsOEJBQWE7R0FEdkMsZ0JBQWdCLENBc0I1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuLi9wcmlzbWEuc2VydmljZSc7XG5cbkBDb250cm9sbGVyKCdoZWFsdGgnKVxuZXhwb3J0IGNsYXNzIEhlYWx0aENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByaXNtYTogUHJpc21hU2VydmljZSkge31cblxuICBAR2V0KClcbiAgYXN5bmMgY2hlY2soKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucHJpc21hLiRxdWVyeVJhd2BTRUxFQ1QgMWA7XG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2hlYWx0aHknLFxuICAgICAgICBkYXRhYmFzZTogJ2Nvbm5lY3RlZCcsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICd1bmhlYWx0aHknLFxuICAgICAgICBkYXRhYmFzZTogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgICAgIGVycm9yOiBlcnJvcj8ubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59Il19