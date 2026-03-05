import {
  Injectable,
  ExecutionContext,
  CallHandler,
  NestInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpExceptionFilter } from './http-exception.filter';

@Injectable()
export class HttpExceptionFilter implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().catch((error) => {
      if (error instanceof HttpException) {
        return error;
      }
      return new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: 'Internal server error' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
  }
}