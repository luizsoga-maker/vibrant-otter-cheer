import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NextAuthStrategy } from './next-auth.strategy';
import { NextAuthOptions } from 'next-auth';