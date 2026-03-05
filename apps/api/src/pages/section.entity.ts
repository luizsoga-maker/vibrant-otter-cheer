import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Page } from './page.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Page, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pageId' })
  page: Page;

  @Column()
  pageId: number;

  @Column()
  type: string;

  @Column('json')
  props: any;
}