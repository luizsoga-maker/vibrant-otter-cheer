import { Injectable } from '@nestjs/common';
import { AiProvider, AiRequestDto, AiResponseDto } from '../ai.provider';

@Injectable()
export class MockProvider implements AiProvider {
  async generate(request: AiRequestDto): Promise<AiResponseDto> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      siteStructure: {
        pages: [
          {
            slug: 'home',
            title: 'Home',
            sections: [
              {
                type: 'hero',
                props: {
                  title: `Welcome to ${request.name}`,
                  subtitle: `${request.profession} specializing in ${request.specialty}`,
                  ctaText: 'Book Appointment',
                  ctaLink: '/contact',
                },
              },
              {
                type: 'about',
                props: {
                  title: 'About Me',
                  description: `Professional ${request.profession} with expertise in ${request.specialty}. Serving patients in ${request.city}.`,
                  features: [
                    {
                      icon: 'graduation-cap',
                      title: 'Qualified Professional',
                      description: 'Certified and experienced in my field',
                    },
                    {
                      icon: 'heart',
                      title: 'Compassionate Care',
                      description: 'Patient-centered approach to treatment',
                    },
                  ],
                },
              },
              {
                type: 'services',
                props: {
                  title: 'Services',
                  services: [
                    {
                      icon: 'stethoscope',
                      title: request.specialty,
                      description: 'Comprehensive care and treatment',
                    },
                  ],
                },
              },
              {
                type: 'testimonials',
                props: {
                  title: 'Patient Testimonials',
                  testimonials: [
                    {
                      name: 'John Doe',
                      role: 'Patient',
                      text: 'Excellent care and professional service.',
                    },
                  ],
                },
              },
              {
                type: 'contact',
                props: {
                  title: 'Contact',
                  phone: request.whatsapp,
                  email: 'contact@example.com',
                  address: request.address,
                  whatsapp: request.whatsapp,
                  socialLinks: request.socialLinks.map(link => ({
                    platform: link.split('.')[0],
                    url: link,
                  })),
                },
              },
            ],
          },
        ],
      },
      texts: {
        title: `${request.name} - ${request.profession} in ${request.city}`,
        description: `Professional ${request.profession} specializing in ${request.specialty}. Serving ${request.city} and surrounding areas.`,
        services: [
          {
            icon: 'stethoscope',
            title: request.specialty,
            description: 'Comprehensive healthcare services',
          },
        ],
        testimonials: [
          {
            name: 'Jane Smith',
            role: 'Patient',
            text: 'Amazing experience with Dr. Silva. Highly recommended!',
          },
        ],
      },
      seo: {
        title: `${request.name} | ${request.profession} in ${request.city}`,
        description: `Book an appointment with ${request.name}, a professional ${request.profession} in ${request.city}. Specializing in ${request.specialty}.`,
      },
      imageSuggestions: [
        `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80`,
        `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80`,
        `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80`,
      ],
    };
  }
}