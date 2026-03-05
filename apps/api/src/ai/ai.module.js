"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiModule = void 0;
const common_1 = require("@nestjs/common");
const ai_controller_1 = require("./ai.controller");
const ai_service_1 = require("./ai.service");
const openai_provider_1 = require("./providers/openai.provider");
const mock_provider_1 = require("./providers/mock.provider");
const prisma_service_1 = require("../prisma.service");
let AiModule = class AiModule {
};
exports.AiModule = AiModule;
exports.AiModule = AiModule = __decorate([
    (0, common_1.Module)({
        controllers: [ai_controller_1.AiController],
        providers: [
            ai_service_1.AiService,
            prisma_service_1.PrismaService,
            {
                provide: 'AI_PROVIDER',
                useClass: process.env.NODE_ENV === 'production' ? openai_provider_1.OpenAIProvider : mock_provider_1.MockProvider,
            },
        ],
    })
], AiModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxtREFBK0M7QUFDL0MsNkNBQXlDO0FBQ3pDLGlFQUE2RDtBQUM3RCw2REFBeUQ7QUFDekQsc0RBQWtEO0FBYTNDLElBQU0sUUFBUSxHQUFkLE1BQU0sUUFBUTtDQUFHLENBQUE7QUFBWCw0QkFBUTttQkFBUixRQUFRO0lBWHBCLElBQUEsZUFBTSxFQUFDO1FBQ04sV0FBVyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUMzQixTQUFTLEVBQUU7WUFDVCxzQkFBUztZQUNULDhCQUFhO1lBQ2I7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdDQUFjLENBQUMsQ0FBQyxDQUFDLDRCQUFZO2FBQ2hGO1NBQ0Y7S0FDRixDQUFDO0dBQ1csUUFBUSxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQWlDb250cm9sbGVyIH0gZnJvbSAnLi9haS5jb250cm9sbGVyJztcbmltcG9ydCB7IEFpU2VydmljZSB9IGZyb20gJy4vYWkuc2VydmljZSc7XG5pbXBvcnQgeyBPcGVuQUlQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL29wZW5haS5wcm92aWRlcic7XG5pbXBvcnQgeyBNb2NrUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tb2NrLnByb3ZpZGVyJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICcuLi9wcmlzbWEuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBjb250cm9sbGVyczogW0FpQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFpU2VydmljZSxcbiAgICBQcmlzbWFTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6ICdBSV9QUk9WSURFUicsXG4gICAgICB1c2VDbGFzczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IE9wZW5BSVByb3ZpZGVyIDogTW9ja1Byb3ZpZGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFpTW9kdWxlIHt9Il19