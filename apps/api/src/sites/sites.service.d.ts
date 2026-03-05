import { PrismaService } from '../prisma.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
export declare class SitesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createSite(createSiteDto: CreateSiteDto): Promise<any>;
    getAllSites(): Promise<any>;
    getSiteById(id: string): Promise<any>;
    updateSite(id: string, updateSiteDto: UpdateSiteDto): Promise<any>;
    deleteSite(id: string): Promise<any>;
}
