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
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AiController = class AiController {
    constructor(aiService) {
        this.aiService = aiService;
    }
    async generate(request) {
        return this.aiService.generate(request);
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('generate'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generate", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFpLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZEO0FBQzdELDZDQUF5QztBQUV6QywyREFBc0Q7QUFHL0MsSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtJQUN2QixZQUE2QixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQztJQUkvQyxBQUFOLEtBQUssQ0FBQyxRQUFRLENBQVMsT0FBcUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTtBQVJZLG9DQUFZO0FBS2pCO0lBRkwsSUFBQSxhQUFJLEVBQUMsVUFBVSxDQUFDO0lBQ2hCLElBQUEsa0JBQVMsRUFBQyw2QkFBWSxDQUFDO0lBQ1IsV0FBQSxJQUFJLEVBQUUsQ0FBQTs7Ozs0Q0FFckI7dUJBUFUsWUFBWTtJQUR4QixJQUFBLG1CQUFVLEVBQUMsSUFBSSxDQUFDO3FDQUV5QixzQkFBUztHQUR0QyxZQUFZLENBUXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgUG9zdCwgVXNlR3VhcmRzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQWlTZXJ2aWNlIH0gZnJvbSAnLi9haS5zZXJ2aWNlJztcbmltcG9ydCB7IEFpUmVxdWVzdER0bywgQWlSZXNwb25zZUR0byB9IGZyb20gJy4vYWkucmVxdWVzdC5kdG8nO1xuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnLi4vYXV0aC9qd3QtYXV0aC5ndWFyZCc7XG5cbkBDb250cm9sbGVyKCdhaScpXG5leHBvcnQgY2xhc3MgQWlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhaVNlcnZpY2U6IEFpU2VydmljZSkge31cblxuICBAUG9zdCgnZ2VuZXJhdGUnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZ2VuZXJhdGUoQEJvZHkoKSByZXF1ZXN0OiBBaVJlcXVlc3REdG8pOiBQcm9taXNlPEFpUmVzcG9uc2VEdG8+IHtcbiAgICByZXR1cm4gdGhpcy5haVNlcnZpY2UuZ2VuZXJhdGUocmVxdWVzdCk7XG4gIH1cbn0iXX0=