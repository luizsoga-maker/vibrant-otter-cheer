export interface AiProvider {
  generate(request: AiRequestDto): Promise<AiResponseDto>;
}

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
  siteStructure: SiteStructure;
  texts: {
    title: string;
    description: string;
    services: Service[];
    testimonials: Testimonial[];
  };
  seo: {
    title: string;
    description: string;
  };
  imageSuggestions: string[];
}

export interface SiteStructure {
  pages: {
    slug: string;
    title: string;
    sections: Section[];
  }[];
}

export interface Section {
  type: string;
  props: any;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}