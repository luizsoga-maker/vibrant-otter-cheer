"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsModule = void 0;
const common_1 = require("@nestjs/common");
const assets_controller_1 = require("./assets.controller");
const assets_service_1 = require("./assets.service");
const prisma_service_1 = require("../prisma.service");
let AssetsModule = class AssetsModule {
};
exports.AssetsModule = AssetsModule;
exports.AssetsModule = AssetsModule = __decorate([
    (0, common_1.Module)({
        controllers: [assets_controller_1.AssetsController],
        providers: [assets_service_1.AssetsService, prisma_service_1.PrismaService],
    })
], AssetsModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2V0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDJEQUF1RDtBQUN2RCxxREFBaUQ7QUFDakQsc0RBQWtEO0FBTTNDLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQVk7Q0FBRyxDQUFBO0FBQWYsb0NBQVk7dUJBQVosWUFBWTtJQUp4QixJQUFBLGVBQU0sRUFBQztRQUNOLFdBQVcsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1FBQy9CLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsOEJBQWEsQ0FBQztLQUMxQyxDQUFDO0dBQ1csWUFBWSxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXNzZXRzQ29udHJvbGxlciB9IGZyb20gJy4vYXNzZXRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXNzZXRzU2VydmljZSB9IGZyb20gJy4vYXNzZXRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJy4uL3ByaXNtYS5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGNvbnRyb2xsZXJzOiBbQXNzZXRzQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW0Fzc2V0c1NlcnZpY2UsIFByaXNtYVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBBc3NldHNNb2R1bGUge30iXX0=