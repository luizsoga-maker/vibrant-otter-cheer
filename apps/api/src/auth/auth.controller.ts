import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string; name?: string }) {
    const validation = SignupDto.validate(body);
    if (!validation.valid) {
      throw new HttpException(validation.errors.join(', '), HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.authService.signup(body.email, body.password, body.name);
      return { 
        success: true, 
        message: 'Account created successfully', 
        user: result.user, 
        token: result.token 
      };
    } catch (error: any) {
      if (error.message === 'User already exists') {
        throw new HttpException('An account with this email already exists', HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message || 'Failed to create account', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    if (!body.email || !body.password) {
      throw new HttpException('Email and password are required', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.authService.login(body.email, body.password);
      return { 
        success: true, 
        message: 'Login successful', 
        user: result.user, 
        token: result.token 
      };
    } catch (error: any) {
      if (error.message === 'Invalid credentials') {
        throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
      }
      throw new HttpException(error.message || 'Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}