import {
  Injectable,
  ExecutionContext,
  CallHandler,
  NestInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpExceptionFilter implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          { status: HttpStatus.INTERNAL_SERVER_ERROR, error: 'Internal server error' },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      })
    );
  }
}