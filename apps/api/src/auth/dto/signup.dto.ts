export class SignupDto {
  email!: string;
  password!: string;
  name?: string;

  static validate(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Invalid email format');
    }

    if (!data.password || data.password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}