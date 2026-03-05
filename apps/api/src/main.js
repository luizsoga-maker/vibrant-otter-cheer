"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: process.env.FRONTEND_URL || 'http://localhost:5173',
            credentials: true,
        },
    });
    // Enable CORS for all origins in development
    if (process.env.NODE_ENV !== 'production') {
        app.enableCors({
            origin: '*',
            credentials: true,
        });
    }
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`API server running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBdUI7QUFDdkIsdUNBQTJDO0FBQzNDLDZDQUF5QztBQUN6QywyQ0FBZ0Q7QUFFaEQsS0FBSyxVQUFVLFNBQVM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxzQkFBUyxFQUFFO1FBQzlDLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSx1QkFBdUI7WUFDM0QsV0FBVyxFQUFFLElBQUk7U0FDbEI7S0FDRixDQUFDLENBQUM7SUFFSCw2Q0FBNkM7SUFDN0MsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLHVCQUFjLEVBQUUsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUN0QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcbmltcG9ydCB7IFZhbGlkYXRpb25QaXBlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUsIHtcbiAgICBjb3JzOiB7XG4gICAgICBvcmlnaW46IHByb2Nlc3MuZW52LkZST05URU5EX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MTczJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIEVuYWJsZSBDT1JTIGZvciBhbGwgb3JpZ2lucyBpbiBkZXZlbG9wbWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFwcC5lbmFibGVDb3JzKHtcbiAgICAgIG9yaWdpbjogJyonLFxuICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBhcHAudXNlR2xvYmFsUGlwZXMobmV3IFZhbGlkYXRpb25QaXBlKCkpO1xuICBcbiAgY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbiAgYXdhaXQgYXBwLmxpc3Rlbihwb3J0KTtcbiAgXG4gIGNvbnNvbGUubG9nKGBBUEkgc2VydmVyIHJ1bm5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59XG5cbmJvb3RzdHJhcCgpOyJdfQ==