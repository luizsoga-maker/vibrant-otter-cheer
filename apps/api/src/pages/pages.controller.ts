import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { PagesService } from './pages.service';
import { Page } from './page.entity';
import { CreatePageDto } from './create-page.dto';
import { UpdatePageDto } from './update-page.dto';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  async createPage(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.createPage(createPageDto);
  }

  @Get()
  async getAllPages() {
    return this.pagesService.getAllPages();
  }

  @Get(':id')
  async getPageById(@Param('id') id: string) {
    return this.pagesService.getPageById(id);
  }

  @Put(':id')
  async updatePage(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.updatePage(id, updatePageDto);
  }

  @Delete(':id')
  async deletePage(@Param('id') id: string) {
    return this.pagesService.deletePage(id);
  }
}