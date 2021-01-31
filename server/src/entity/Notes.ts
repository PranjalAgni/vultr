import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  notesId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: "fkUserId" })
  fkUserId: User;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @CreateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
