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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let SitesService = class SitesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createSite(createSiteDto) {
        return this.prisma.site.create({
            data: {
                ...createSiteDto,
                status: 'DRAFT',
            },
        });
    }
    async getAllSites() {
        return this.prisma.site.findMany({
            include: {
                pages: true,
                assets: true,
            },
        });
    }
    async getSiteById(id) {
        return this.prisma.site.findUnique({
            where: { id: Number(id) },
            include: {
                pages: true,
                assets: true,
            },
        });
    }
    async updateSite(id, updateSiteDto) {
        return this.prisma.site.update({
            where: { id: Number(id) },
            data: updateSiteDto,
        });
    }
    async deleteSite(id) {
        return this.prisma.site.delete({
            where: { id: Number(id) },
        });
    }
};
exports.SitesService = SitesService;
exports.SitesService = SitesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SitesService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpdGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLHNEQUFrRDtBQUszQyxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0lBQ3ZCLFlBQTZCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBRXRELEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBNEI7UUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFO2dCQUNKLEdBQUcsYUFBYTtnQkFDaEIsTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDakMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQVUsRUFBRSxhQUE0QjtRQUN2RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pCLElBQUksRUFBRSxhQUFhO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQTNDWSxvQ0FBWTt1QkFBWixZQUFZO0lBRHhCLElBQUEsbUJBQVUsR0FBRTtxQ0FFMEIsOEJBQWE7R0FEdkMsWUFBWSxDQTJDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJy4uL3ByaXNtYS5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZVNpdGVEdG8gfSBmcm9tICcuL2R0by9jcmVhdGUtc2l0ZS5kdG8nO1xuaW1wb3J0IHsgVXBkYXRlU2l0ZUR0byB9IGZyb20gJy4vZHRvL3VwZGF0ZS1zaXRlLmR0byc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByaXNtYTogUHJpc21hU2VydmljZSkge31cblxuICBhc3luYyBjcmVhdGVTaXRlKGNyZWF0ZVNpdGVEdG86IENyZWF0ZVNpdGVEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcmlzbWEuc2l0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICAuLi5jcmVhdGVTaXRlRHRvLFxuICAgICAgICBzdGF0dXM6ICdEUkFGVCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0QWxsU2l0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpc21hLnNpdGUuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICBwYWdlczogdHJ1ZSxcbiAgICAgICAgYXNzZXRzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldFNpdGVCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlzbWEuc2l0ZS5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWQpIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhZ2VzOiB0cnVlLFxuICAgICAgICBhc3NldHM6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlU2l0ZShpZDogc3RyaW5nLCB1cGRhdGVTaXRlRHRvOiBVcGRhdGVTaXRlRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpc21hLnNpdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWQpIH0sXG4gICAgICBkYXRhOiB1cGRhdGVTaXRlRHRvLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlU2l0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpc21hLnNpdGUuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWQpIH0sXG4gICAgfSk7XG4gIH1cbn0iXX0=