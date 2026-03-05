import { ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HttpExceptionFilter implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
