import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @CreateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
