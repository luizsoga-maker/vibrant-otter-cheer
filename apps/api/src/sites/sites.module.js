"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesModule = void 0;
const common_1 = require("@nestjs/common");
const sites_controller_1 = require("./sites.controller");
const sites_service_1 = require("./sites.service");
const prisma_service_1 = require("../prisma.service");
let SitesModule = class SitesModule {
};
exports.SitesModule = SitesModule;
exports.SitesModule = SitesModule = __decorate([
    (0, common_1.Module)({
        controllers: [sites_controller_1.SitesController],
        providers: [sites_service_1.SitesService, prisma_service_1.PrismaService],
    })
], SitesModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2l0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4Qyx5REFBcUQ7QUFDckQsbURBQStDO0FBQy9DLHNEQUFrRDtBQU0zQyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0NBQUcsQ0FBQTtBQUFkLGtDQUFXO3NCQUFYLFdBQVc7SUFKdkIsSUFBQSxlQUFNLEVBQUM7UUFDTixXQUFXLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzlCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsOEJBQWEsQ0FBQztLQUN6QyxDQUFDO0dBQ1csV0FBVyxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2l0ZXNDb250cm9sbGVyIH0gZnJvbSAnLi9zaXRlcy5jb250cm9sbGVyJztcbmltcG9ydCB7IFNpdGVzU2VydmljZSB9IGZyb20gJy4vc2l0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlIH0gZnJvbSAnLi4vcHJpc21hLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgY29udHJvbGxlcnM6IFtTaXRlc0NvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtTaXRlc1NlcnZpY2UsIFByaXNtYVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlc01vZHVsZSB7fSJdfQ==