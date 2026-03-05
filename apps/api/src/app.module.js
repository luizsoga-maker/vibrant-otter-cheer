"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma.service");
const auth_module_1 = require("./auth/auth.module");
const sites_module_1 = require("./sites/sites.module");
const pages_module_1 = require("./pages/pages.module");
const assets_module_1 = require("./assets/assets.module");
const billing_module_1 = require("./billing/billing.module");
const ai_module_1 = require("./ai/ai.module");
const health_controller_1 = require("./health/health.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            sites_module_1.SitesModule,
            pages_module_1.PagesModule,
            assets_module_1.AssetsModule,
            billing_module_1.BillingModule,
            ai_module_1.AiModule,
        ],
        controllers: [health_controller_1.HealthController],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDJDQUE4QztBQUM5QyxxREFBaUQ7QUFDakQsb0RBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCx1REFBbUQ7QUFDbkQsMERBQXNEO0FBQ3RELDZEQUF5RDtBQUN6RCw4Q0FBMEM7QUFDMUMsa0VBQThEO0FBaUJ2RCxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVM7Q0FBRyxDQUFBO0FBQVosOEJBQVM7b0JBQVQsU0FBUztJQWZyQixJQUFBLGVBQU0sRUFBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHFCQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7WUFDRix3QkFBVTtZQUNWLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCw0QkFBWTtZQUNaLDhCQUFhO1lBQ2Isb0JBQVE7U0FDVDtRQUNELFdBQVcsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1FBQy9CLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7S0FDM0IsQ0FBQztHQUNXLFNBQVMsQ0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZXNNb2R1bGUgfSBmcm9tICcuL3NpdGVzL3NpdGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlc01vZHVsZSB9IGZyb20gJy4vcGFnZXMvcGFnZXMubW9kdWxlJztcbmltcG9ydCB7IEFzc2V0c01vZHVsZSB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0cy5tb2R1bGUnO1xuaW1wb3J0IHsgQmlsbGluZ01vZHVsZSB9IGZyb20gJy4vYmlsbGluZy9iaWxsaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBaU1vZHVsZSB9IGZyb20gJy4vYWkvYWkubW9kdWxlJztcbmltcG9ydCB7IEhlYWx0aENvbnRyb2xsZXIgfSBmcm9tICcuL2hlYWx0aC9oZWFsdGguY29udHJvbGxlcic7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgfSksXG4gICAgQXV0aE1vZHVsZSxcbiAgICBTaXRlc01vZHVsZSxcbiAgICBQYWdlc01vZHVsZSxcbiAgICBBc3NldHNNb2R1bGUsXG4gICAgQmlsbGluZ01vZHVsZSxcbiAgICBBaU1vZHVsZSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtIZWFsdGhDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==