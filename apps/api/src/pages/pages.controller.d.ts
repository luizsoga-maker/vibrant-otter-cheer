import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
export declare class PagesController {
    private readonly pagesService;
    constructor(pagesService: PagesService);
    createPage(createPageDto: CreatePageDto): Promise<any>;
    getAllPages(): Promise<any>;
    getPageById(id: string): Promise<any>;
    updatePage(id: string, updatePageDto: UpdatePageDto): Promise<any>;
    deletePage(id: string): Promise<any>;
}
