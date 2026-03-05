export declare class SignupDto {
    email: string;
    password: string;
    name?: string;
    static validate(data: any): {
        valid: boolean;
        errors: string[];
    };
}
