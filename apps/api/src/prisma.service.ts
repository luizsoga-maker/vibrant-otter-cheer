import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async $connect() {
    await super.$connect();
  }

  async $disconnect() {
    await super.$disconnect();
  }
}
＜/dyad-write>

＜dyad-write path="apps/api/src/health/health.controller.ts" description="Fix health controller imports and method">
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async check() {
    try {
      // Check database connection
      await this.prisma.$queryRaw`SELECT 1`;
      
      return {
        status: 'healthy',
        database: 'connected',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        database: 'disconnected',
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}
＜/dyad-write>

＜dyad-write path="apps/api/src/auth/jwt-auth.guard.ts" description="Fix JWT auth guard imports and method">
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      return false;
    }

    try {
      const payload = await this.jwtService.verify(token);
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user) {
        return false;
      }

      request.user = user;
      return true;
    } catch (error) {
      return false;
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') || [];
    return type === 'Bearer' ? token : undefined;
  }
}
＜/dyad-write>

<dyad-write path="apps/api/src/auth/auth.service.ts" description="Fix auth service imports and method declarations">
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(email: string, password: string, name?: string) {
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        passwordHash: hashedPassword,
      },
    });

    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    return { user, token };
  }

  async validateUser(token: string) {
    try {
      const payload = await this.jwtService.verify(token);
      return await this.prisma.user.findUnique({ where: { id: payload.sub } });
    } catch (error) {
      return null;
    }
  }
}