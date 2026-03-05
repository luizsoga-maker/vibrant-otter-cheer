import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({ type: 'enum', enum: ['basic', 'pro', 'premium'] })
  plan: string;

  @Column({ name: 'stripe_customer_id' })
  stripeCustomerId: string;

  @Column({ type: 'enum', enum: ['DRAFT', 'ACTIVE', 'PAST_DUE', 'CANCELLED'], default: 'ACTIVE' })
  status: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}