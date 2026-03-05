"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let HttpExceptionFilter = class HttpExceptionFilter {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.catchError)((error) => {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({ status: common_1.HttpStatus.INTERNAL_SERVER_ERROR, error: 'Internal server error' }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }));
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Injectable)()
], HttpExceptionFilter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1leGNlcHRpb24uZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1leGNlcHRpb24uZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQU93QjtBQUV4Qiw4Q0FBNEM7QUFHckMsSUFBTSxtQkFBbUIsR0FBekIsTUFBTSxtQkFBbUI7SUFDOUIsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUN2QixJQUFBLHNCQUFVLEVBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLEtBQUssWUFBWSxzQkFBYSxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sS0FBSyxDQUFDO1lBQ2QsQ0FBQztZQUNELE1BQU0sSUFBSSxzQkFBYSxDQUNyQixFQUFFLE1BQU0sRUFBRSxtQkFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxFQUM1RSxtQkFBVSxDQUFDLHFCQUFxQixDQUNqQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBZFksa0RBQW1COzhCQUFuQixtQkFBbUI7SUFEL0IsSUFBQSxtQkFBVSxHQUFFO0dBQ0EsbUJBQW1CLENBYy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgRXhlY3V0aW9uQ29udGV4dCxcbiAgQ2FsbEhhbmRsZXIsXG4gIE5lc3RJbnRlcmNlcHRvcixcbiAgSHR0cEV4Y2VwdGlvbixcbiAgSHR0cFN0YXR1cyxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBpbnRlcmNlcHQoY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgbmV4dDogQ2FsbEhhbmRsZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSgpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXhjZXB0aW9uKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oXG4gICAgICAgICAgeyBzdGF0dXM6IEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSxcbiAgICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSJdfQ==