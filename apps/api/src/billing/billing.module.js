"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingModule = void 0;
const common_1 = require("@nestjs/common");
const billing_controller_1 = require("./billing.controller");
const billing_service_1 = require("./billing.service");
const prisma_service_1 = require("../prisma.service");
let BillingModule = class BillingModule {
};
exports.BillingModule = BillingModule;
exports.BillingModule = BillingModule = __decorate([
    (0, common_1.Module)({
        controllers: [billing_controller_1.BillingController],
        providers: [billing_service_1.BillingService, prisma_service_1.PrismaService],
    })
], BillingModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaWxsaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsNkRBQXlEO0FBQ3pELHVEQUFtRDtBQUNuRCxzREFBa0Q7QUFNM0MsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtDQUFHLENBQUE7QUFBaEIsc0NBQWE7d0JBQWIsYUFBYTtJQUp6QixJQUFBLGVBQU0sRUFBQztRQUNOLFdBQVcsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztLQUMzQyxDQUFDO0dBQ1csYUFBYSxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQmlsbGluZ0NvbnRyb2xsZXIgfSBmcm9tICcuL2JpbGxpbmcuY29udHJvbGxlcic7XG5pbXBvcnQgeyBCaWxsaW5nU2VydmljZSB9IGZyb20gJy4vYmlsbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuLi9wcmlzbWEuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBjb250cm9sbGVyczogW0JpbGxpbmdDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQmlsbGluZ1NlcnZpY2UsIFByaXNtYVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBCaWxsaW5nTW9kdWxlIHt9Il19