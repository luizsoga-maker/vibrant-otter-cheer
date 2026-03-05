"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const prisma_service_1 = require("../prisma.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'your-secret-key',
                signOptions: { expiresIn: '7d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, prisma_service_1.PrismaService, jwt_auth_guard_1.JwtAuthGuard],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMscUNBQXdDO0FBQ3hDLCtDQUFrRDtBQUNsRCx1REFBbUQ7QUFDbkQsaURBQTZDO0FBQzdDLHFEQUFnRDtBQUNoRCxzREFBa0Q7QUFjM0MsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQUFHLENBQUE7QUFBYixnQ0FBVTtxQkFBVixVQUFVO0lBWnRCLElBQUEsZUFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AseUJBQWM7WUFDZCxlQUFTLENBQUMsUUFBUSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksaUJBQWlCO2dCQUNuRCxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO2FBQ2pDLENBQUM7U0FDSDtRQUNELFdBQVcsRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLDZCQUFZLENBQUM7UUFDckQsT0FBTyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN2QixDQUFDO0dBQ1csVUFBVSxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSnd0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgUGFzc3BvcnRNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSAnLi9hdXRoLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBKd3RBdXRoR3VhcmQgfSBmcm9tICcuL2p3dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuLi9wcmlzbWEuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUGFzc3BvcnRNb2R1bGUsXG4gICAgSnd0TW9kdWxlLnJlZ2lzdGVyKHtcbiAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAneW91ci1zZWNyZXQta2V5JyxcbiAgICAgIHNpZ25PcHRpb25zOiB7IGV4cGlyZXNJbjogJzdkJyB9LFxuICAgIH0pLFxuICBdLFxuICBjb250cm9sbGVyczogW0F1dGhDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFByaXNtYVNlcnZpY2UsIEp3dEF1dGhHdWFyZF0sXG4gIGV4cG9ydHM6IFtBdXRoU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge30iXX0=