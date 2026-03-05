import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
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

  app.useGlobalPipes(new ValidationPipe());
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`API server running on port ${port}`);
}

bootstrap();