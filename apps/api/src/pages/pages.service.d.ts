import { PrismaService } from '../prisma.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
export declare class PagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPage(createPageDto: CreatePageDto): Promise<any>;
    getAllPages(): Promise<any>;
    getPageById(id: string): Promise<any>;
    updatePage(id: string, updatePageDto: UpdatePageDto): Promise<any>;
    deletePage(id: string): Promise<any>;
}
