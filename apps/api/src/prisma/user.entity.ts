import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Site } from './site.entity';
import { Billing } from './billing.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @OneToMany(() => Site, (site) => site.user)
  sites: Site[];

  @OneToOne(() => Billing, (billing) => billing.user)
  billing: Billing;
}