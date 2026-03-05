import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Page } from '../pages/page.entity';
import { Asset } from './asset.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column('json')
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
    };
  };

  @Column({ type: 'enum', enum: ['DRAFT', 'ACTIVE', 'PAST_DUE', 'CANCELLED'], default: 'DRAFT' })
  status: string;

  @OneToMany(() => Page, (page) => page.site, { cascade: true })
  pages: Page[];

  @OneToMany(() => Asset, (asset) => asset.site)
  assets: Asset[];
}