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
exports.PagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PagesService = class PagesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPage(createPageDto) {
        return this.prisma.page.create({
            data: {
                ...createPageDto,
                sections: createPageDto.sections || [],
            },
        });
    }
    async getAllPages() {
        return this.prisma.page.findMany({
            include: {
                site: true,
            },
        });
    }
    async getPageById(id) {
        return this.prisma.page.findUnique({
            where: { id: Number(id) },
            include: {
                site: true,
            },
        });
    }
    async updatePage(id, updatePageDto) {
        return this.prisma.page.update({
            where: { id: Number(id) },
            data: {
                ...updatePageDto,
                sections: updatePageDto.sections || undefined,
            },
        });
    }
    async deletePage(id) {
        return this.prisma.page.delete({
            where: { id: Number(id) },
        });
    }
};
exports.PagesService = PagesService;
exports.PagesService = PagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PagesService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLHNEQUFrRDtBQUszQyxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0lBQ3ZCLFlBQTZCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBRXRELEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBNEI7UUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFO2dCQUNKLEdBQUcsYUFBYTtnQkFDaEIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRLElBQUksRUFBRTthQUN2QztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBVSxFQUFFLGFBQTRCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDekIsSUFBSSxFQUFFO2dCQUNKLEdBQUcsYUFBYTtnQkFDaEIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRLElBQUksU0FBUzthQUM5QztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQTVDWSxvQ0FBWTt1QkFBWixZQUFZO0lBRHhCLElBQUEsbUJBQVUsR0FBRTtxQ0FFMEIsOEJBQWE7R0FEdkMsWUFBWSxDQTRDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJy4uL3ByaXNtYS5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZVBhZ2VEdG8gfSBmcm9tICcuL2R0by9jcmVhdGUtcGFnZS5kdG8nO1xuaW1wb3J0IHsgVXBkYXRlUGFnZUR0byB9IGZyb20gJy4vZHRvL3VwZGF0ZS1wYWdlLmR0byc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByaXNtYTogUHJpc21hU2VydmljZSkge31cblxuICBhc3luYyBjcmVhdGVQYWdlKGNyZWF0ZVBhZ2VEdG86IENyZWF0ZVBhZ2VEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcmlzbWEucGFnZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICAuLi5jcmVhdGVQYWdlRHRvLFxuICAgICAgICBzZWN0aW9uczogY3JlYXRlUGFnZUR0by5zZWN0aW9ucyB8fCBbXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXRBbGxQYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlzbWEucGFnZS5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHNpdGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0UGFnZUJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnByaXNtYS5wYWdlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZCkgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2l0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVQYWdlKGlkOiBzdHJpbmcsIHVwZGF0ZVBhZ2VEdG86IFVwZGF0ZVBhZ2VEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcmlzbWEucGFnZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZCkgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4udXBkYXRlUGFnZUR0byxcbiAgICAgICAgc2VjdGlvbnM6IHVwZGF0ZVBhZ2VEdG8uc2VjdGlvbnMgfHwgdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVBhZ2UoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnByaXNtYS5wYWdlLmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkKSB9LFxuICAgIH0pO1xuICB9XG59Il19