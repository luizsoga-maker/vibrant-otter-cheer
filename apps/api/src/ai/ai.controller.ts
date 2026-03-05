import { Controller, Post, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiRequestDto, AiResponseDto } from './ai.request.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate')
  @UseGuards(JwtAuthGuard)
  async generate(@Body() request: AiRequestDto): Promise<AiResponseDto> {
    return this.aiService.generate(request);
  }
}