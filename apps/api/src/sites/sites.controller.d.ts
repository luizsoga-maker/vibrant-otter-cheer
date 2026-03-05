import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
export declare class SitesController {
    private readonly sitesService;
    constructor(sitesService: SitesService);
    createSite(createSiteDto: CreateSiteDto): Promise<any>;
    getAllSites(): Promise<any>;
    getSiteById(id: string): Promise<any>;
    updateSite(id: string, updateSiteDto: UpdateSiteDto): Promise<any>;
    deleteSite(id: string): Promise<any>;
}
