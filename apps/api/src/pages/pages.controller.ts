import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

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