import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { OpenAIProvider } from './providers/openai.provider';
import { MockProvider } from './providers/mock.provider';

@Module({
  controllers: [AiController],
  providers: [
    AiService,
    {
      provide: 'AI_PROVIDER',
      useClass: process.env.NODE_ENV === 'production' ? OpenAIProvider : MockProvider,
    },
  ],
})
export class AiModule {}