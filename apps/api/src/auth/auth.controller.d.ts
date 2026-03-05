import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: {
        email: string;
        password: string;
        name?: string;
    }): Promise<{
        success: boolean;
        message: string;
        user: any;
        token: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        success: boolean;
        message: string;
        user: any;
        token: string;
    }>;
}
