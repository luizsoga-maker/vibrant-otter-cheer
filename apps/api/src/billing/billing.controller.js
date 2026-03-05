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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingController = void 0;
const common_1 = require("@nestjs/common");
const billing_service_1 = require("./billing.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let BillingController = class BillingController {
    constructor(billingService) {
        this.billingService = billingService;
    }
    async getPlans() {
        return this.billingService.getPlans();
    }
    async subscribe(body) {
        return this.billingService.createSubscription(body.plan, body.userId);
    }
    async webhook(body) {
        return { received: true };
    }
};
exports.BillingController = BillingController;
__decorate([
    (0, common_1.Get)('plans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillingController.prototype, "getPlans", null);
__decorate([
    (0, common_1.Post)('subscribe'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BillingController.prototype, "subscribe", null);
__decorate([
    (0, common_1.Post)('webhook'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BillingController.prototype, "webhook", null);
exports.BillingController = BillingController = __decorate([
    (0, common_1.Controller)('billing'),
    __metadata("design:paramtypes", [billing_service_1.BillingService])
], BillingController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmlsbGluZy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFrRTtBQUNsRSx1REFBbUQ7QUFDbkQsMkRBQXNEO0FBRy9DLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBQzVCLFlBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFHekQsQUFBTixLQUFLLENBQUMsUUFBUTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBSUssQUFBTixLQUFLLENBQUMsU0FBUyxDQUFTLElBQXNDO1FBQzVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsT0FBTyxDQUFTLElBQVM7UUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQWxCWSw4Q0FBaUI7QUFJdEI7SUFETCxJQUFBLFlBQUcsRUFBQyxPQUFPLENBQUM7Ozs7aURBR1o7QUFJSztJQUZMLElBQUEsYUFBSSxFQUFDLFdBQVcsQ0FBQztJQUNqQixJQUFBLGtCQUFTLEVBQUMsNkJBQVksQ0FBQztJQUNQLFdBQUEsSUFBSSxFQUFFLENBQUE7Ozs7a0RBRXRCO0FBR0s7SUFETCxJQUFBLGFBQUksRUFBQyxTQUFTLENBQUM7SUFDRCxXQUFBLElBQUksRUFBRSxDQUFBOzs7O2dEQUVwQjs0QkFqQlUsaUJBQWlCO0lBRDdCLElBQUEsbUJBQVUsRUFBQyxTQUFTLENBQUM7cUNBRXlCLGdDQUFjO0dBRGhELGlCQUFpQixDQWtCN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QsIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEJpbGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi9iaWxsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnLi4vYXV0aC9qd3QtYXV0aC5ndWFyZCc7XG5cbkBDb250cm9sbGVyKCdiaWxsaW5nJylcbmV4cG9ydCBjbGFzcyBCaWxsaW5nQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYmlsbGluZ1NlcnZpY2U6IEJpbGxpbmdTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoJ3BsYW5zJylcbiAgYXN5bmMgZ2V0UGxhbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmlsbGluZ1NlcnZpY2UuZ2V0UGxhbnMoKTtcbiAgfVxuXG4gIEBQb3N0KCdzdWJzY3JpYmUnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgc3Vic2NyaWJlKEBCb2R5KCkgYm9keTogeyBwbGFuOiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5iaWxsaW5nU2VydmljZS5jcmVhdGVTdWJzY3JpcHRpb24oYm9keS5wbGFuLCBib2R5LnVzZXJJZCk7XG4gIH1cblxuICBAUG9zdCgnd2ViaG9vaycpXG4gIGFzeW5jIHdlYmhvb2soQEJvZHkoKSBib2R5OiBhbnkpIHtcbiAgICByZXR1cm4geyByZWNlaXZlZDogdHJ1ZSB9O1xuICB9XG59Il19