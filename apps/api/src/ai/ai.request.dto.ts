import { AiProvider } from './ai.provider';

export interface AiRequestDto {
  profession: string;
  name: string;
  city: string;
  specialty: string;
  whatsapp: string;
  address: string;
  hours: string;
  socialLinks: string[];
  tone: string;
}

export interface AiResponseDto {
  siteStructure: {
    pages: {
      slug: string;
      title: string;
      sections: Array<{
        type: string;
        props: any;
      }>;
    }[];
  };
  texts: {
    title: string;
    description: string;
    services: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    testimonials: Array<{
      name: string;
      role: string;
      text: string;
    }>;
  };
  seo: {
    title: string;
    description: string;
  };
  imageSuggestions: string[];
}