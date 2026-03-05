import { Strategy } from 'next-auth';
import { PrismaService } from '../prisma.service';

export const NextAuthStrategy = new Strategy(
  {
    name: 'jwt',
    token: {
      signingKey: process.env.JWT_SECRET,
      encryptionKey: process.env.JWT_SECRET,
    },
  },
  async (tokens, user) => {
    if (user) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    }
    return tokens;
  }
);