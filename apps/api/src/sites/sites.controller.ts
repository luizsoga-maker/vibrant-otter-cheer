import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  async createSite(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.createSite(createSiteDto);
  }

  @Get()
  async getAllSites() {
    return this.sitesService.getAllSites();
  }

  @Get(':id')
  async getSiteById(@Param('id') id: string) {
    return this.sitesService.getSiteById(id);
  }

  @Put(':id')
  async updateSite(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.updateSite(id, updateSiteDto);
  }

  @Delete(':id')
  async deleteSite(@Param('id') id: string) {
    return this.sitesService.deleteSite(id);
  }
}