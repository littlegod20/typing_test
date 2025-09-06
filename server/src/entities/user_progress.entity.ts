import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CommonEntity } from "./common.entity";
import { UserProgressStatus } from "../enums";
import { User } from "./user.entity";
import { Lesson } from "./lesson.entity";


@Entity()
export class UserProgress extends CommonEntity {

  @ManyToOne(() => User, (user) => user.user_progress)
  @JoinColumn({ name: "user_id" })
  user!: User

  @ManyToOne(() => Lesson, (lesson) => lesson.user_progress)
  @JoinColumn({ name: "lesson_id" })
  lesson!: Lesson

  @Column({ type: "enum", enum: UserProgressStatus, default: UserProgressStatus.LOCKED })
  status!: UserProgressStatus

  @Column("int")
  best_wpm!: number

  @Column("float")
  best_accuracy!: number;

  @Column()
  date_completed!: Date;

  @Column("int")
  number_of_attempts!: number;
}