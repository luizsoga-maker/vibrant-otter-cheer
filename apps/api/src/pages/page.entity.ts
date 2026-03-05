import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Site } from '../prisma/site.entity';
import { Section } from './section.entity';

@Entity()
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Site, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'siteId' })
  site: Site;

  @Column()
  siteId: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @OneToMany(() => Section, (section) => section.page, { cascade: true })
  sections: Section[];
}