import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signup(email: string, password: string, name?: string): Promise<{
        user: any;
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: any;
        token: string;
    }>;
    validateUser(token: string): Promise<any>;
}
