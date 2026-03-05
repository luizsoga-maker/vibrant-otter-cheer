import { AiProvider, AiRequestDto, AiResponseDto } from '../ai.provider';
export declare class MockProvider implements AiProvider {
    generate(request: AiRequestDto): Promise<AiResponseDto>;
}
