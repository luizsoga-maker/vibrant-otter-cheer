import { Section } from '../prisma/section.entity';

export interface CreatePageDto {
  siteId: string;
  slug: string;
  title: string;
  sections: Section[];
}