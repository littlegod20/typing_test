import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { TypingTest } from "./typing_test.entity";

@Entity()
export class ErrorLog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.error_logs)
  @JoinColumn({ name: "user_id" })
  user!: User

  @ManyToOne(() => TypingTest, (typing_test) => typing_test.error_logs)
  @JoinColumn({ name: "test_id" })
  typing_test!: TypingTest;

  @Column()
  timestamp!: Date;

  @Column()
  expected_character!: string;

  @Column()
  actual_character!: string;

  @Column()
  context_left!: string;

  @Column()
  context_right!: string;

  @Column()
  word!: string;

  @CreateDateColumn()
  created_at!: string;
}