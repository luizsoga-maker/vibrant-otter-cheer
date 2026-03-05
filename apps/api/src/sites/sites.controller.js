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
exports.SitesController = void 0;
const common_1 = require("@nestjs/common");
const sites_service_1 = require("./sites.service");
let SitesController = class SitesController {
    constructor(sitesService) {
        this.sitesService = sitesService;
    }
    async createSite(createSiteDto) {
        return this.sitesService.createSite(createSiteDto);
    }
    async getAllSites() {
        return this.sitesService.getAllSites();
    }
    async getSiteById(id) {
        return this.sitesService.getSiteById(id);
    }
    async updateSite(id, updateSiteDto) {
        return this.sitesService.updateSite(id, updateSiteDto);
    }
    async deleteSite(id) {
        return this.sitesService.deleteSite(id);
    }
};
exports.SitesController = SitesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "createSite", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "getAllSites", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "getSiteById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, Param('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "updateSite", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "deleteSite", null);
exports.SitesController = SitesController = __decorate([
    (0, common_1.Controller)('sites'),
    __metadata("design:paramtypes", [sites_service_1.SitesService])
], SitesController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpdGVzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBFO0FBQzFFLG1EQUErQztBQUt4QyxJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFlO0lBQzFCLFlBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUdyRCxBQUFOLEtBQUssQ0FBQyxVQUFVLENBQVMsYUFBNEI7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsV0FBVztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsV0FBVyxDQUFjLEVBQVU7UUFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsVUFBVSxDQUFjLEVBQVUsRUFBVSxhQUE0QjtRQUM1RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsVUFBVSxDQUFjLEVBQVU7UUFDdEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTtBQTNCWSwwQ0FBZTtBQUlwQjtJQURMLElBQUEsYUFBSSxHQUFFO0lBQ1csV0FBQSxJQUFBLGFBQUksR0FBRSxDQUFBOzs7O2lEQUV2QjtBQUdLO0lBREwsSUFBQSxZQUFHLEdBQUU7Ozs7a0RBR0w7QUFHSztJQURMLElBQUEsWUFBRyxFQUFDLEtBQUssQ0FBQztJQUNRLFdBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O2tEQUU3QjtBQUdLO0lBREwsSUFBQSxZQUFHLEVBQUMsS0FBSyxDQUFDO0lBQ08sV0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFBYyxXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7Ozs7aURBRWhEO0FBR0s7SUFETCxJQUFBLGVBQU0sRUFBQyxLQUFLLENBQUM7SUFDSSxXQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztpREFFNUI7MEJBMUJVLGVBQWU7SUFEM0IsSUFBQSxtQkFBVSxFQUFDLE9BQU8sQ0FBQztxQ0FFeUIsNEJBQVk7R0FENUMsZUFBZSxDQTJCM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QsIFB1dCwgRGVsZXRlLCBCb2R5IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2l0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZVNpdGVEdG8gfSBmcm9tICcuL2R0by9jcmVhdGUtc2l0ZS5kdG8nO1xuaW1wb3J0IHsgVXBkYXRlU2l0ZUR0byB9IGZyb20gJy4vZHRvL3VwZGF0ZS1zaXRlLmR0byc7XG5cbkBDb250cm9sbGVyKCdzaXRlcycpXG5leHBvcnQgY2xhc3MgU2l0ZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzaXRlc1NlcnZpY2U6IFNpdGVzU2VydmljZSkge31cblxuICBAUG9zdCgpXG4gIGFzeW5jIGNyZWF0ZVNpdGUoQEJvZHkoKSBjcmVhdGVTaXRlRHRvOiBDcmVhdGVTaXRlRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZXNTZXJ2aWNlLmNyZWF0ZVNpdGUoY3JlYXRlU2l0ZUR0byk7XG4gIH1cblxuICBAR2V0KClcbiAgYXN5bmMgZ2V0QWxsU2l0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZXNTZXJ2aWNlLmdldEFsbFNpdGVzKCk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBhc3luYyBnZXRTaXRlQnlJZChAUGFyYW0oJ2lkJykgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNpdGVzU2VydmljZS5nZXRTaXRlQnlJZChpZCk7XG4gIH1cblxuICBAUHV0KCc6aWQnKVxuICBhc3luYyB1cGRhdGVTaXRlKEBQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAQm9keSgpIHVwZGF0ZVNpdGVEdG86IFVwZGF0ZVNpdGVEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5zaXRlc1NlcnZpY2UudXBkYXRlU2l0ZShpZCwgdXBkYXRlU2l0ZUR0byk7XG4gIH1cblxuICBARGVsZXRlKCc6aWQnKVxuICBhc3luYyBkZWxldGVTaXRlKEBQYXJhbSgnaWQnKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZXNTZXJ2aWNlLmRlbGV0ZVNpdGUoaWQpO1xuICB9XG59Il19