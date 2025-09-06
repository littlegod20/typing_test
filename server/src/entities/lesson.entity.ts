import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CommonEntity } from "./common.entity";
import { Course } from "./course.entity";
import { UserProgress } from "./user_progress.entity";


@Entity()
export class Lesson extends CommonEntity {

  @ManyToOne(() => Course, (course) => course.lessons)
  @JoinColumn({ name: "course_id" })
  course!: Course

  @OneToMany(() => UserProgress, (user_progress) => user_progress.lesson)
  user_progress!: UserProgress[]

  @Column("uuid")
  text_sample_id!: number;

  @Column("uuid")
  prerequisite_lesson_id!: number;

  @Column()
  title!: string;

  @Column("text")
  description!: string;

  @Column()
  order_index!: number;
}