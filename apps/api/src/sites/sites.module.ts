import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from '../prisma/site.entity';
import { Page } from '../prisma/page.entity';
import { Section } from '../prisma/section.entity';
import { Asset } from '../prisma/asset.entity';