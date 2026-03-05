import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string; name?: string }) {
    return this.authService.signup(body.email, body.password, body.name);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('logout')
  @UseGuards()
  async logout(@Request() req: any) {
    // In a real app, you might want to blacklist the token
    return { message: 'Logged out successfully' };
  }

  @Get('me')
  @UseGuards()
  async me(@Request() req: any) {
    return req.user;
  }
}