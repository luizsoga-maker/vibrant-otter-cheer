import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    return await prisma.user.findUnique({ where: { email } });
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function createTestSite(): Promise<Site | null> {
  try {
    return await prisma.site.create({
      data: {
        name: 'Test Site',
        slug: 'test-site',
        theme: {
          colors: {
            primary: '#3b82f6',
            secondary: '#10b981',
            background: '#ffffff',
            text: '#333333',
          },
          typography: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
          },
        },
        status: 'DRAFT',
      },
    });
  } catch (error) {
    console.error('Error creating test site:', error);
    return null;
  }
}