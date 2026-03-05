import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: {
        email: string;
        password: string;
        name?: string;
    }): Promise<{
        user: any;
        token: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        user: any;
        token: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    me(req: any): Promise<any>;
}
