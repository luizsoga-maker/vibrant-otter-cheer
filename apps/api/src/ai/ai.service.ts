import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AiRequestDto, AiResponseDto } from './ai.request.dto';
import { AiProvider } from './ai.provider';

@Injectable()
export class AiService {
  private cache = new Map<string, { data: AiResponseDto; timestamp: number }>();
  private readonly CACHE_TTL = 3600000; // 1 hour

  constructor(
    private readonly prisma: PrismaService,
    @Inject('AI_PROVIDER') private readonly provider: AiProvider,
  ) {}

  async generate(request: AiRequestDto): Promise<AiResponseDto> {
    const cacheKey = this.generateCacheKey(request);
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.data;
    }

    const response = await this.provider.generate(request);
    
    // Save to cache
    this.cache.set(cacheKey, {
      data: response,
      timestamp: Date.now(),
    });

    // Create site structure in database
    await this.createSiteFromResponse(request, response);

    return response;
  }

  private generateCacheKey(request: AiRequestDto): string {
    return `${request.profession}-${request.city}-${request.specialty}-${request.tone}`;
  }

  private async createSiteFromResponse(
    request: AiRequestDto, 
    response: AiResponseDto
  ) {
    // Create site first
    const site = await this.prisma.site.create({
      data: {
        name: request.name,
        slug: this.generateSlug(request.name),
        theme: {
          colors: {
            primary: '#3b82f6',
            secondary: '#10b981',
            background: '#ffffff',
            text: '#333333',
          },
          typography: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
          },
        },
        status: 'DRAFT',
      },
    });

    // Create pages for the site
    for (const page of response.siteStructure.pages) {
      await this.prisma.page.create({
        data: {
          siteId: site.id,
          slug: page.slug,
          title: page.title,
          sections: page.sections, // Store as JSON
        },
      });
    }

    return site;
  }

  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
}