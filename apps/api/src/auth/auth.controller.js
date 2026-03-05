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
const signup_dto_1 = require("./dto/signup.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(body) {
        const validation = signup_dto_1.SignupDto.validate(body);
        if (!validation.valid) {
            throw new common_1.HttpException(validation.errors.join(', '), common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const result = await this.authService.signup(body.email, body.password, body.name);
            return {
                success: true,
                message: 'Account created successfully',
                user: result.user,
                token: result.token
            };
        }
        catch (error) {
            if (error.message === 'User already exists') {
                throw new common_1.HttpException('An account with this email already exists', common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException(error.message || 'Failed to create account', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(body) {
        if (!body.email || !body.password) {
            throw new common_1.HttpException('Email and password are required', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const result = await this.authService.login(body.email, body.password);
            return {
                success: true,
                message: 'Login successful',
                user: result.user,
                token: result.token
            };
        }
        catch (error) {
            if (error.message === 'Invalid credentials') {
                throw new common_1.HttpException('Invalid email or password', common_1.HttpStatus.UNAUTHORIZED);
            }
            throw new common_1.HttpException(error.message || 'Login failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtRjtBQUNuRixpREFBNkM7QUFDN0MsaURBQTZDO0FBR3RDLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR25ELEFBQU4sS0FBSyxDQUFDLE1BQU0sQ0FBUyxJQUF3RDtRQUMzRSxNQUFNLFVBQVUsR0FBRyxzQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxzQkFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEYsQ0FBQztRQUVELElBQUksQ0FBQztZQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRixPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQ3BCLENBQUM7UUFDSixDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUsscUJBQXFCLEVBQUUsQ0FBQztnQkFDNUMsTUFBTSxJQUFJLHNCQUFhLENBQUMsMkNBQTJDLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RixDQUFDO1lBQ0QsTUFBTSxJQUFJLHNCQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSwwQkFBMEIsRUFBRSxtQkFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekcsQ0FBQztJQUNILENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxLQUFLLENBQVMsSUFBeUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsTUFBTSxJQUFJLHNCQUFhLENBQUMsaUNBQWlDLEVBQUUsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBRUQsSUFBSSxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQ3BCLENBQUM7UUFDSixDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUsscUJBQXFCLEVBQUUsQ0FBQztnQkFDNUMsTUFBTSxJQUFJLHNCQUFhLENBQUMsMkJBQTJCLEVBQUUsbUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRixDQUFDO1lBQ0QsTUFBTSxJQUFJLHNCQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxjQUFjLEVBQUUsbUJBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQS9DWSx3Q0FBYztBQUluQjtJQURMLElBQUEsYUFBSSxFQUFDLFFBQVEsQ0FBQztJQUNELFdBQUEsSUFBQSxhQUFJLEdBQUUsQ0FBQTs7Ozs0Q0FvQm5CO0FBR0s7SUFETCxJQUFBLGFBQUksRUFBQyxPQUFPLENBQUM7SUFDRCxXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7Ozs7MkNBbUJsQjt5QkE5Q1UsY0FBYztJQUQxQixJQUFBLG1CQUFVLEVBQUMsTUFBTSxDQUFDO3FDQUV5QiwwQkFBVztHQUQxQyxjQUFjLENBK0MxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIFBvc3QsIEJvZHksIEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZ251cER0byB9IGZyb20gJy4vZHRvL3NpZ251cC5kdG8nO1xuXG5AQ29udHJvbGxlcignYXV0aCcpXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICBAUG9zdCgnc2lnbnVwJylcbiAgYXN5bmMgc2lnbnVwKEBCb2R5KCkgYm9keTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nOyBuYW1lPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gU2lnbnVwRHRvLnZhbGlkYXRlKGJvZHkpO1xuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24odmFsaWRhdGlvbi5lcnJvcnMuam9pbignLCAnKSwgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2Uuc2lnbnVwKGJvZHkuZW1haWwsIGJvZHkucGFzc3dvcmQsIGJvZHkubmFtZSk7XG4gICAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXG4gICAgICAgIG1lc3NhZ2U6ICdBY2NvdW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JywgXG4gICAgICAgIHVzZXI6IHJlc3VsdC51c2VyLCBcbiAgICAgICAgdG9rZW46IHJlc3VsdC50b2tlbiBcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdVc2VyIGFscmVhZHkgZXhpc3RzJykge1xuICAgICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignQW4gYWNjb3VudCB3aXRoIHRoaXMgZW1haWwgYWxyZWFkeSBleGlzdHMnLCBIdHRwU3RhdHVzLkNPTkZMSUNUKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBjcmVhdGUgYWNjb3VudCcsIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKTtcbiAgICB9XG4gIH1cblxuICBAUG9zdCgnbG9naW4nKVxuICBhc3luYyBsb2dpbihAQm9keSgpIGJvZHk6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgaWYgKCFib2R5LmVtYWlsIHx8ICFib2R5LnBhc3N3b3JkKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZCcsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGJvZHkuZW1haWwsIGJvZHkucGFzc3dvcmQpO1xuICAgICAgcmV0dXJuIHsgXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxuICAgICAgICBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsIFxuICAgICAgICB1c2VyOiByZXN1bHQudXNlciwgXG4gICAgICAgIHRva2VuOiByZXN1bHQudG9rZW4gXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnSW52YWxpZCBjcmVkZW50aWFscycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnLCBIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihlcnJvci5tZXNzYWdlIHx8ICdMb2dpbiBmYWlsZWQnLCBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUik7XG4gICAgfVxuICB9XG59Il19