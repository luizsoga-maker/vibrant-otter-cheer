import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPage(createPageDto: CreatePageDto) {
    return this.prisma.page.create({
      data: {
        ...createPageDto,
        sections: createPageDto.sections || [],
      },
    });
  }

  async getAllPages() {
    return this.prisma.page.findMany({
      include: {
        site: true,
      },
    });
  }

  async getPageById(id: string) {
    return this.prisma.page.findUnique({
      where: { id: Number(id) },
      include: {
        site: true,
      },
    });
  }

  async updatePage(id: string, updatePageDto: UpdatePageDto) {
    return this.prisma.page.update({
      where: { id: Number(id) },
      data: {
        ...updatePageDto,
        sections: updatePageDto.sections || undefined,
      },
    });
  }

  async deletePage(id: string) {
    return this.prisma.page.delete({
      where: { id: Number(id) },
    });
  }
}