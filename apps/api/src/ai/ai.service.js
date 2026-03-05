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
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AiService = class AiService {
    constructor(prisma, provider) {
        this.prisma = prisma;
        this.provider = provider;
        this.cache = new Map();
        this.CACHE_TTL = 3600000; // 1 hour
    }
    async generate(request) {
        const cacheKey = this.generateCacheKey(request);
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
            return cached.data;
        }
        const response = await this.provider.generate(request);
        // Save to cache
        this.cache.set(cacheKey, {
            data: response,
            timestamp: Date.now(),
        });
        // Create site structure in database
        await this.createSiteFromResponse(request, response);
        return response;
    }
    generateCacheKey(request) {
        return `${request.profession}-${request.city}-${request.specialty}-${request.tone}`;
    }
    async createSiteFromResponse(request, response) {
        // Create site first
        const site = await this.prisma.site.create({
            data: {
                name: request.name,
                slug: this.generateSlug(request.name),
                theme: {
                    colors: {
                        primary: '#3b82f6',
                        secondary: '#10b981',
                        background: '#ffffff',
                        text: '#333333',
                    },
                    typography: {
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                    },
                },
                status: 'DRAFT',
            },
        });
        // Create pages for the site
        for (const page of response.siteStructure.pages) {
            await this.prisma.page.create({
                data: {
                    siteId: site.id,
                    slug: page.slug,
                    title: page.title,
                    sections: page.sections,
                },
            });
        }
        return site;
    }
    generateSlug(name) {
        return name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], AiService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLHNEQUFrRDtBQUszQyxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVM7SUFJcEIsWUFDbUIsTUFBcUIsRUFDckIsUUFBb0I7UUFEcEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBTC9CLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBc0QsQ0FBQztRQUM3RCxjQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUztJQUs1QyxDQUFDO0lBRUosS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFxQjtRQUNsQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2RCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsb0NBQW9DO1FBQ3BDLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsT0FBcUI7UUFDNUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RixDQUFDO0lBRU8sS0FBSyxDQUFDLHNCQUFzQixDQUNsQyxPQUFxQixFQUNyQixRQUF1QjtRQUV2QixvQkFBb0I7UUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekMsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDckMsS0FBSyxFQUFFO29CQUNMLE1BQU0sRUFBRTt3QkFDTixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0QsVUFBVSxFQUFFO3dCQUNWLFVBQVUsRUFBRSxtQkFBbUI7d0JBQy9CLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixVQUFVLEVBQUUsS0FBSztxQkFDbEI7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7UUFFSCw0QkFBNEI7UUFDNUIsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hELE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDeEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTyxJQUFJO2FBQ1IsV0FBVyxFQUFFO2FBQ2IsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUNoQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO2FBQy9CLE9BQU8sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDO2FBQzNCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7QUFwRlksOEJBQVM7b0JBQVQsU0FBUztJQURyQixJQUFBLG1CQUFVLEdBQUU7cUNBTWdCLDhCQUFhO0dBTDdCLFNBQVMsQ0FvRnJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuLi9wcmlzbWEuc2VydmljZSc7XG5pbXBvcnQgeyBBaVJlcXVlc3REdG8sIEFpUmVzcG9uc2VEdG8gfSBmcm9tICcuL2FpLnJlcXVlc3QuZHRvJztcbmltcG9ydCB7IEFpUHJvdmlkZXIgfSBmcm9tICcuL2FpLnByb3ZpZGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFpU2VydmljZSB7XG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgeyBkYXRhOiBBaVJlc3BvbnNlRHRvOyB0aW1lc3RhbXA6IG51bWJlciB9PigpO1xuICBwcml2YXRlIHJlYWRvbmx5IENBQ0hFX1RUTCA9IDM2MDAwMDA7IC8vIDEgaG91clxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJpc21hOiBQcmlzbWFTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvdmlkZXI6IEFpUHJvdmlkZXIsXG4gICkge31cblxuICBhc3luYyBnZW5lcmF0ZShyZXF1ZXN0OiBBaVJlcXVlc3REdG8pOiBQcm9taXNlPEFpUmVzcG9uc2VEdG8+IHtcbiAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2VuZXJhdGVDYWNoZUtleShyZXF1ZXN0KTtcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLmNhY2hlLmdldChjYWNoZUtleSk7XG4gICAgXG4gICAgaWYgKGNhY2hlZCAmJiBEYXRlLm5vdygpIC0gY2FjaGVkLnRpbWVzdGFtcCA8IHRoaXMuQ0FDSEVfVFRMKSB7XG4gICAgICByZXR1cm4gY2FjaGVkLmRhdGE7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb3ZpZGVyLmdlbmVyYXRlKHJlcXVlc3QpO1xuICAgIFxuICAgIC8vIFNhdmUgdG8gY2FjaGVcbiAgICB0aGlzLmNhY2hlLnNldChjYWNoZUtleSwge1xuICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgc2l0ZSBzdHJ1Y3R1cmUgaW4gZGF0YWJhc2VcbiAgICBhd2FpdCB0aGlzLmNyZWF0ZVNpdGVGcm9tUmVzcG9uc2UocmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUNhY2hlS2V5KHJlcXVlc3Q6IEFpUmVxdWVzdER0byk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3JlcXVlc3QucHJvZmVzc2lvbn0tJHtyZXF1ZXN0LmNpdHl9LSR7cmVxdWVzdC5zcGVjaWFsdHl9LSR7cmVxdWVzdC50b25lfWA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZVNpdGVGcm9tUmVzcG9uc2UoXG4gICAgcmVxdWVzdDogQWlSZXF1ZXN0RHRvLCBcbiAgICByZXNwb25zZTogQWlSZXNwb25zZUR0b1xuICApIHtcbiAgICAvLyBDcmVhdGUgc2l0ZSBmaXJzdFxuICAgIGNvbnN0IHNpdGUgPSBhd2FpdCB0aGlzLnByaXNtYS5zaXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IHJlcXVlc3QubmFtZSxcbiAgICAgICAgc2x1ZzogdGhpcy5nZW5lcmF0ZVNsdWcocmVxdWVzdC5uYW1lKSxcbiAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICBjb2xvcnM6IHtcbiAgICAgICAgICAgIHByaW1hcnk6ICcjM2I4MmY2JyxcbiAgICAgICAgICAgIHNlY29uZGFyeTogJyMxMGI5ODEnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgdGV4dDogJyMzMzMzMzMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwb2dyYXBoeToge1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ0ludGVyLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS42JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXM6ICdEUkFGVCcsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHBhZ2VzIGZvciB0aGUgc2l0ZVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZS5zaXRlU3RydWN0dXJlLnBhZ2VzKSB7XG4gICAgICBhd2FpdCB0aGlzLnByaXNtYS5wYWdlLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzaXRlSWQ6IHNpdGUuaWQsXG4gICAgICAgICAgc2x1ZzogcGFnZS5zbHVnLFxuICAgICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlLFxuICAgICAgICAgIHNlY3Rpb25zOiBwYWdlLnNlY3Rpb25zLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpdGU7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlU2x1ZyhuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuYW1lXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC9bXmEtejAtOV0rL2csICctJylcbiAgICAgIC5yZXBsYWNlKC8oXi18LSQpL2csICcnKTtcbiAgfVxufSJdfQ==