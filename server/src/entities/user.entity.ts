import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  @IsNotEmpty()
  password!: string;

  @Column({ nullable: true })
  refreshToken!: string;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true, default: null })
  deletedAt!: Date | null;
}
