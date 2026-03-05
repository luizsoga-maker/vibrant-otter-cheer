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
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AssetsService = class AssetsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async uploadFile(file) {
        // For now, just store file metadata without S3
        const asset = await this.prisma.asset.create({
            data: {
                key: `assets/${Date.now()}-${file.originalname}`,
                url: `/uploads/${file.originalname}`, // Placeholder
                filename: file.originalname,
                size: file.size,
                type: file.mimetype.split('/')[0],
            },
        });
        return asset;
    }
    async getAllAssets() {
        return this.prisma.asset.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            take: 50,
        });
    }
};
exports.AssetsService = AssetsService;
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AssetsService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3NldHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEM7QUFDNUMsc0RBQWtEO0FBRzNDLElBQU0sYUFBYSxHQUFuQixNQUFNLGFBQWE7SUFDeEIsWUFBNkIsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFdEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFTO1FBQ3hCLCtDQUErQztRQUMvQyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLFVBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hELEdBQUcsRUFBRSxZQUFZLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxjQUFjO2dCQUNwRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFRO2FBQ3pDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsT0FBTyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1lBQ0QsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQTFCWSxzQ0FBYTt3QkFBYixhQUFhO0lBRHpCLElBQUEsbUJBQVUsR0FBRTtxQ0FFMEIsOEJBQWE7R0FEdkMsYUFBYSxDQTBCekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJy4uL3ByaXNtYS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFzc2V0c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByaXNtYTogUHJpc21hU2VydmljZSkge31cblxuICBhc3luYyB1cGxvYWRGaWxlKGZpbGU6IGFueSkge1xuICAgIC8vIEZvciBub3csIGp1c3Qgc3RvcmUgZmlsZSBtZXRhZGF0YSB3aXRob3V0IFMzXG4gICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0aGlzLnByaXNtYS5hc3NldC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBrZXk6IGBhc3NldHMvJHtEYXRlLm5vdygpfS0ke2ZpbGUub3JpZ2luYWxuYW1lfWAsXG4gICAgICAgIHVybDogYC91cGxvYWRzLyR7ZmlsZS5vcmlnaW5hbG5hbWV9YCwgLy8gUGxhY2Vob2xkZXJcbiAgICAgICAgZmlsZW5hbWU6IGZpbGUub3JpZ2luYWxuYW1lLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIHR5cGU6IGZpbGUubWltZXR5cGUuc3BsaXQoJy8nKVswXSBhcyBhbnksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFzc2V0O1xuICB9XG5cbiAgYXN5bmMgZ2V0QWxsQXNzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnByaXNtYS5hc3NldC5maW5kTWFueSh7XG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnLFxuICAgICAgfSxcbiAgICAgIHRha2U6IDUwLFxuICAgIH0pO1xuICB9XG59Il19