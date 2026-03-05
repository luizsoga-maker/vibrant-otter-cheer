// Seed data for development
// - Create sample users
// - Create sample sites
// - Populate test data for AI generation

async function seed() {
  try {
    // Create sample user
    const user = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        name: 'Admin User',
        passwordHash: 'hashed_password',
      },
    });

    // Create sample site
    const site = await prisma.site.create({
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

    console.log('Seed data created successfully');
  } catch (error) {
    console.error('Seed failed:', error);
  }
}

seed();