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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(body) {
        return this.authService.signup(body.email, body.password, body.name);
    }
    async login(body) {
        return this.authService.login(body.email, body.password);
    }
    async logout(req) {
        return { message: 'Logged out successfully' };
    }
    async me(req) {
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyRTtBQUMzRSxpREFBNkM7QUFDN0MscURBQWdEO0FBR3pDLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR25ELEFBQU4sS0FBSyxDQUFDLE1BQU0sQ0FBUyxJQUF3RDtRQUMzRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUdLLEFBQU4sS0FBSyxDQUFDLEtBQUssQ0FBUyxJQUF5QztRQUMzRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFJSyxBQUFOLEtBQUssQ0FBQyxNQUFNLENBQVksR0FBUTtRQUM5QixPQUFPLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUlLLEFBQU4sS0FBSyxDQUFDLEVBQUUsQ0FBWSxHQUFRO1FBQzFCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQTtBQXhCWSx3Q0FBYztBQUluQjtJQURMLElBQUEsYUFBSSxFQUFDLFFBQVEsQ0FBQztJQUNELFdBQUEsSUFBSSxFQUFFLENBQUE7Ozs7NENBRW5CO0FBR0s7SUFETCxJQUFBLGFBQUksRUFBQyxPQUFPLENBQUM7SUFDRCxXQUFBLElBQUksRUFBRSxDQUFBOzs7OzJDQUVsQjtBQUlLO0lBRkwsSUFBQSxhQUFJLEVBQUMsUUFBUSxDQUFDO0lBQ2QsSUFBQSxrQkFBUyxFQUFDLDZCQUFZLENBQUM7SUFDVixXQUFBLElBQUEsZ0JBQU8sR0FBRSxDQUFBOzs7OzRDQUV0QjtBQUlLO0lBRkwsSUFBQSxZQUFHLEVBQUMsSUFBSSxDQUFDO0lBQ1QsSUFBQSxrQkFBUyxFQUFDLDZCQUFZLENBQUM7SUFDZCxXQUFBLElBQUEsZ0JBQU8sR0FBRSxDQUFBOzs7O3dDQUVsQjt5QkF2QlUsY0FBYztJQUQxQixJQUFBLG1CQUFVLEVBQUMsTUFBTSxDQUFDO3FDQUV5QiwwQkFBVztHQUQxQyxjQUFjLENBd0IxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIFBvc3QsIFVzZUd1YXJkcywgUmVxdWVzdCwgR2V0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBKd3RBdXRoR3VhcmQgfSBmcm9tICcuL2p3dC1hdXRoLmd1YXJkJztcblxuQENvbnRyb2xsZXIoJ2F1dGgnKVxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgQFBvc3QoJ3NpZ251cCcpXG4gIGFzeW5jIHNpZ251cChAQm9keSgpIGJvZHk6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZzsgbmFtZT86IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbnVwKGJvZHkuZW1haWwsIGJvZHkucGFzc3dvcmQsIGJvZHkubmFtZSk7XG4gIH1cblxuICBAUG9zdCgnbG9naW4nKVxuICBhc3luYyBsb2dpbihAQm9keSgpIGJvZHk6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UubG9naW4oYm9keS5lbWFpbCwgYm9keS5wYXNzd29yZCk7XG4gIH1cblxuICBAUG9zdCgnbG9nb3V0JylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGxvZ291dChAUmVxdWVzdCgpIHJlcTogYW55KSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0xvZ2dlZCBvdXQgc3VjY2Vzc2Z1bGx5JyB9O1xuICB9XG5cbiAgQEdldCgnbWUnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgbWUoQFJlcXVlc3QoKSByZXE6IGFueSkge1xuICAgIHJldHVybiByZXEudXNlcjtcbiAgfVxufSJdfQ==