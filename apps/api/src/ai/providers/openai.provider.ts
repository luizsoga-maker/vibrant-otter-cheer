import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { AiProvider, AiRequestDto, AiResponseDto } from '../ai.provider';

@Injectable()
export class OpenAIProvider implements AiProvider {
  private readonly openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generate(request: AiRequestDto): Promise<AiResponseDto> {
    const prompt = this.buildPrompt(request);

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are a professional website generator for healthcare professionals.
            Always generate valid JSON following the exact schema.
            Include necessary disclaimers for healthcare services.
            Never promise cures or guaranteed results.
            Keep content professional and accurate.`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
      });

      const responseText = completion.choices[0].message.content || '';
      return this.parseResponse(responseText);
    } catch (error) {
      throw new Error(`OpenAI API error: ${error.message}`);
    }
  }

  private buildPrompt(request: AiRequestDto): string {
    return `
Generate a complete website structure for a healthcare professional with the following details:

Profession: ${request.profession}
Name: ${request.name}
City: ${request.city}
Specialty: ${request.specialty}
WhatsApp: ${request.whatsapp}
Address: ${request.address}
Hours: ${request.hours}
Social Links: ${request.socialLinks.join(', ')}
Tone: ${request.tone}

Requirements:
1. Create a homepage with hero, about, services, testimonials, and contact sections
2. Generate SEO-optimized title and description
3. Suggest 3 relevant images (provide placeholder URLs)
4. Include healthcare disclaimers
5. Use professional, ${request.tone} tone

Return ONLY valid JSON in this exact format:
{
  "siteStructure": {
    "pages": [
      {
        "slug": "home",
        "title": "Home",
        "sections": [
          {
            "type": "hero",
            "props": {
              "title": "Welcome to ${request.name}",
              "subtitle": "${request.profession} in ${request.city}",
              "ctaText": "Book Appointment",
              "ctaLink": "/contact"
            }
          },
          {
            "type": "about",
            "props": {
              "title": "About Me",
              "description": "Professional description here",
              "features": [
                { "icon": "graduation-cap", "title": "Qualified", "description": "Certified professional" },
                { "icon": "heart", "title": "Compassionate", "description": "Patient-centered care" }
              ]
            }
          },
          {
            "type": "services",
            "props": {
              "title": "Services",
              "services": [
                { "icon": "stethoscope", "title": "${request.specialty}", "description": "Comprehensive care" }
              ]
            }
          },
          {
            "type": "testimonials",
            "props": {
              "title": "Patient Testimonials",
              "testimonials": [
                { "name": "Patient", "role": "Patient", "text": "Excellent care!" }
              ]
            }
          },
          {
            "type": "contact",
            "props": {
              "title": "Contact",
              "phone": "${request.whatsapp}",
              "email": "contact@example.com",
              "address": "${request.address}",
              "whatsapp": "${request.whatsapp}",
              "socialLinks": ${JSON.stringify(request.socialLinks.map(link => ({ platform: link.split('.')[0], url: link })))}
            }
          }
        ]
      }
    ]
  },
  "texts": {
    "title": "${request.name} - ${request.profession} in ${request.city}",
    "description": "Professional ${request.profession} specializing in ${request.specialty} in ${request.city}",
    "services": [
      { "icon": "stethoscope", "title": "${request.specialty}", "description": "Comprehensive healthcare services" }
    ],
    "testimonials": [
      { "name": "Jane Smith", "role": "Patient", "text": "Amazing experience! Highly recommended!" }
    ]
  },
  "seo": {
    "title": "${request.name} | ${request.profession} in ${request.city}",
    "description": "Book an appointment with ${request.name}, a professional ${request.profession} in ${request.city}."
  },
  "imageSuggestions": [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  ]
}
`;
  }

  private parseResponse(text: string): AiResponseDto {
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }
      const json = JSON.parse(jsonMatch[0]);
      return json as AiResponseDto;
    } catch (error) {
      throw new Error(`Failed to parse AI response: ${error.message}`);
    }
  }
}