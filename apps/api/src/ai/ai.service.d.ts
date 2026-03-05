import { PrismaService } from '../prisma.service';
import { AiRequestDto, AiResponseDto } from './ai.request.dto';
import { AiProvider } from './ai.provider';
export declare class AiService {
    private readonly prisma;
    private readonly provider;
    private cache;
    private readonly CACHE_TTL;
    constructor(prisma: PrismaService, provider: AiProvider);
    generate(request: AiRequestDto): Promise<AiResponseDto>;
    private generateCacheKey;
    private createSiteFromResponse;
    private generateSlug;
}
