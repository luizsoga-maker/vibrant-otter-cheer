import { Section } from '../prisma/section.entity';

export interface UpdatePageDto {
  title?: string;
  sections?: Section[];
}