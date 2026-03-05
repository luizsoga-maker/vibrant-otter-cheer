import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Injectable()
export class SitesService {
  constructor(private readonly prisma: PrismaService) {}

  async createSite(createSiteDto: CreateSiteDto) {
    return this.prisma.site.create({
      data: {
        ...createSiteDto,
        status: 'DRAFT',
      },
    });
  }

  async getAllSites() {
    return this.prisma.site.findMany({
      include: {
        pages: true,
        assets: true,
      },
    });
  }

  async getSiteById(id: string) {
    return this.prisma.site.findUnique({
      where: { id: Number(id) },
      include: {
        pages: true,
        assets: true,
      },
    });
  }

  async updateSite(id: string, updateSiteDto: UpdateSiteDto) {
    return this.prisma.site.update({
      where: { id: Number(id) },
      data: updateSiteDto,
    });
  }

  async deleteSite(id: string) {
    return this.prisma.site.delete({
      where: { id: Number(id) },
    });
  }
}