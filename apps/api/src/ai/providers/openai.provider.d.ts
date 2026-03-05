import { AiProvider, AiRequestDto, AiResponseDto } from '../ai.provider';
export declare class OpenAIProvider implements AiProvider {
    private readonly openai;
    constructor();
    generate(request: AiRequestDto): Promise<AiResponseDto>;
    private buildPrompt;
    private parseResponse;
}
