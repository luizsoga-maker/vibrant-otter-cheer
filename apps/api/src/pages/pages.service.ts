import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPage(createPageDto: CreatePageDto) {
    return this.prisma.page.create({
      data: createPageDto,
    });
  }

  async getAllPages() {
    return this.prisma.page.findMany();
  }

  async getPageById(id: string) {
    return this.prisma.page.findUnique({
      where: { id },
    });
  }

  async updatePage(id: string, updatePageDto: UpdatePageDto) {
    return this.prisma.page.update({
      where: { id },
      data: updatePageDto,
    });
  }

  async deletePage(id: string) {
    return this.prisma.page.delete({
      where: { id },
    });
  }
}