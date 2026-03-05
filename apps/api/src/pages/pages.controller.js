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
exports.PagesController = void 0;
const common_1 = require("@nestjs/common");
const pages_service_1 = require("./pages.service");
let PagesController = class PagesController {
    constructor(pagesService) {
        this.pagesService = pagesService;
    }
    async createPage(createPageDto) {
        return this.pagesService.createPage(createPageDto);
    }
    async getAllPages() {
        return this.pagesService.getAllPages();
    }
    async getPageById(id) {
        return this.pagesService.getPageById(id);
    }
    async updatePage(id, updatePageDto) {
        return this.pagesService.updatePage(id, updatePageDto);
    }
    async deletePage(id) {
        return this.pagesService.deletePage(id);
    }
};
exports.PagesController = PagesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "createPage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "getAllPages", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "getPageById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, Param('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "updatePage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "deletePage", null);
exports.PagesController = PagesController = __decorate([
    (0, common_1.Controller)('pages'),
    __metadata("design:paramtypes", [pages_service_1.PagesService])
], PagesController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBFO0FBQzFFLG1EQUErQztBQUt4QyxJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFlO0lBQzFCLFlBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUdyRCxBQUFOLEtBQUssQ0FBQyxVQUFVLENBQVMsYUFBNEI7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsV0FBVztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsV0FBVyxDQUFjLEVBQVU7UUFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsVUFBVSxDQUFjLEVBQVUsRUFBVSxhQUE0QjtRQUM1RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsVUFBVSxDQUFjLEVBQVU7UUFDdEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTtBQTNCWSwwQ0FBZTtBQUlwQjtJQURMLElBQUEsYUFBSSxHQUFFO0lBQ1csV0FBQSxJQUFBLGFBQUksR0FBRSxDQUFBOzs7O2lEQUV2QjtBQUdLO0lBREwsSUFBQSxZQUFHLEdBQUU7Ozs7a0RBR0w7QUFHSztJQURMLElBQUEsWUFBRyxFQUFDLEtBQUssQ0FBQztJQUNRLFdBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O2tEQUU3QjtBQUdLO0lBREwsSUFBQSxZQUFHLEVBQUMsS0FBSyxDQUFDO0lBQ08sV0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFBYyxXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7Ozs7aURBRWhEO0FBR0s7SUFETCxJQUFBLGVBQU0sRUFBQyxLQUFLLENBQUM7SUFDSSxXQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztpREFFNUI7MEJBMUJVLGVBQWU7SUFEM0IsSUFBQSxtQkFBVSxFQUFDLE9BQU8sQ0FBQztxQ0FFeUIsNEJBQVk7R0FENUMsZUFBZSxDQTJCM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QsIFB1dCwgRGVsZXRlLCBCb2R5IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFnZXNTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZVBhZ2VEdG8gfSBmcm9tICcuL2R0by9jcmVhdGUtcGFnZS5kdG8nO1xuaW1wb3J0IHsgVXBkYXRlUGFnZUR0byB9IGZyb20gJy4vZHRvL3VwZGF0ZS1wYWdlLmR0byc7XG5cbkBDb250cm9sbGVyKCdwYWdlcycpXG5leHBvcnQgY2xhc3MgUGFnZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdlc1NlcnZpY2U6IFBhZ2VzU2VydmljZSkge31cblxuICBAUG9zdCgpXG4gIGFzeW5jIGNyZWF0ZVBhZ2UoQEJvZHkoKSBjcmVhdGVQYWdlRHRvOiBDcmVhdGVQYWdlRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZXNTZXJ2aWNlLmNyZWF0ZVBhZ2UoY3JlYXRlUGFnZUR0byk7XG4gIH1cblxuICBAR2V0KClcbiAgYXN5bmMgZ2V0QWxsUGFnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZXNTZXJ2aWNlLmdldEFsbFBhZ2VzKCk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBhc3luYyBnZXRQYWdlQnlJZChAUGFyYW0oJ2lkJykgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBhZ2VzU2VydmljZS5nZXRQYWdlQnlJZChpZCk7XG4gIH1cblxuICBAUHV0KCc6aWQnKVxuICBhc3luYyB1cGRhdGVQYWdlKEBQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAQm9keSgpIHVwZGF0ZVBhZ2VEdG86IFVwZGF0ZVBhZ2VEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlc1NlcnZpY2UudXBkYXRlUGFnZShpZCwgdXBkYXRlUGFnZUR0byk7XG4gIH1cblxuICBARGVsZXRlKCc6aWQnKVxuICBhc3luYyBkZWxldGVQYWdlKEBQYXJhbSgnaWQnKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZXNTZXJ2aWNlLmRlbGV0ZVBhZ2UoaWQpO1xuICB9XG59Il19