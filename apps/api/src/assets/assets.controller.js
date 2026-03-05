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
exports.AssetsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const assets_service_1 = require("./assets.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AssetsController = class AssetsController {
    constructor(assetsService) {
        this.assetsService = assetsService;
    }
    async upload(file) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException('Invalid file type');
        }
        return this.assetsService.uploadFile(file);
    }
    async getAllAssets() {
        return this.assetsService.getAllAssets();
    }
};
exports.AssetsController = AssetsController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, platform_express_1.FileInterceptor)('file'),
    __param(0, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "getAllAssets", null);
exports.AssetsController = AssetsController = __decorate([
    (0, common_1.Controller)('assets'),
    __metadata("design:paramtypes", [assets_service_1.AssetsService])
], AssetsController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3NldHMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUY7QUFDdkYsK0RBQTJEO0FBQzNELHFEQUFpRDtBQUNqRCwyREFBc0Q7QUFHL0MsSUFBTSxnQkFBZ0IsR0FBdEIsTUFBTSxnQkFBZ0I7SUFDM0IsWUFBNkIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBS3ZELEFBQU4sS0FBSyxDQUFDLE1BQU0sQ0FBaUIsSUFBUztRQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLElBQUksNEJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxNQUFNLElBQUksNEJBQW1CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBSUssQUFBTixLQUFLLENBQUMsWUFBWTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUNGLENBQUE7QUF4QlksNENBQWdCO0FBTXJCO0lBSEwsSUFBQSxhQUFJLEVBQUMsUUFBUSxDQUFDO0lBQ2QsSUFBQSxrQkFBUyxFQUFDLDZCQUFZLENBQUM7SUFDdkIsSUFBQSxrQ0FBZSxFQUFDLE1BQU0sQ0FBQztJQUNWLFdBQUEsWUFBWSxFQUFFLENBQUE7Ozs7OENBVzNCO0FBSUs7SUFGTCxJQUFBLFlBQUcsR0FBRTtJQUNMLElBQUEsa0JBQVMsRUFBQyw2QkFBWSxDQUFDOzs7O29EQUd2QjsyQkF2QlUsZ0JBQWdCO0lBRDVCLElBQUEsbUJBQVUsRUFBQyxRQUFRLENBQUM7cUNBRXlCLDhCQUFhO0dBRDlDLGdCQUFnQixDQXdCNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBQb3N0LCBHZXQsIFVzZUd1YXJkcywgQmFkUmVxdWVzdEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEZpbGVJbnRlcmNlcHRvciB9IGZyb20gJ0BuZXN0anMvcGxhdGZvcm0tZXhwcmVzcyc7XG5pbXBvcnQgeyBBc3NldHNTZXJ2aWNlIH0gZnJvbSAnLi9hc3NldHMuc2VydmljZSc7XG5pbXBvcnQgeyBKd3RBdXRoR3VhcmQgfSBmcm9tICcuLi9hdXRoL2p3dC1hdXRoLmd1YXJkJztcblxuQENvbnRyb2xsZXIoJ2Fzc2V0cycpXG5leHBvcnQgY2xhc3MgQXNzZXRzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXNzZXRzU2VydmljZTogQXNzZXRzU2VydmljZSkge31cblxuICBAUG9zdCgndXBsb2FkJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIEBGaWxlSW50ZXJjZXB0b3IoJ2ZpbGUnKVxuICBhc3luYyB1cGxvYWQoQFVwbG9hZGVkRmlsZSgpIGZpbGU6IGFueSkge1xuICAgIGlmICghZmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb24oJ05vIGZpbGUgdXBsb2FkZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGxvd2VkVHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2dpZicsICdpbWFnZS93ZWJwJ107XG4gICAgaWYgKCFhbGxvd2VkVHlwZXMuaW5jbHVkZXMoZmlsZS5taW1ldHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXhjZXB0aW9uKCdJbnZhbGlkIGZpbGUgdHlwZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFzc2V0c1NlcnZpY2UudXBsb2FkRmlsZShmaWxlKTtcbiAgfVxuXG4gIEBHZXQoKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZ2V0QWxsQXNzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2V0c1NlcnZpY2UuZ2V0QWxsQXNzZXRzKCk7XG4gIH1cbn0iXX0=