import { AiService } from './ai.service';
import { AiRequestDto, AiResponseDto } from './ai.request.dto';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    generate(request: AiRequestDto): Promise<AiResponseDto>;
}
