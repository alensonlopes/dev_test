import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from './User';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  title!: string;

  @Column({ length: 100 })
  description!: string;

  @Column()
  userId!: number;

  user!: User;
}