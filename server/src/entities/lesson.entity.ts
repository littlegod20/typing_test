import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { CommonEntity } from "./common.entity";
import { Course } from "./course.entity";
import { UserProgress } from "./user_progress.entity";
import { TextSample } from "./text_sample.entity";


@Entity()
export class Lesson extends CommonEntity {

  @ManyToOne(() => Course, (course) => course.lessons)
  @JoinColumn({ name: "course_id" })
  course!: Course

  @OneToMany(() => UserProgress, (user_progress) => user_progress.lesson)
  user_progress!: UserProgress[]

  @ManyToOne(() => TextSample, (text_sample) => text_sample.lesson)
  @JoinColumn({ name: "text_sample_id" })
  text_sample!: TextSample;

  @ManyToOne(() => Lesson, (lesson) => lesson.dependent_lessons, { nullable: true })
  @JoinColumn({ name: "prerequisite_lesson_id" })
  prerequisite_lesson!: Lesson | null;

  @OneToMany(() => Lesson, (lesson) => lesson.prerequisite_lesson)
  dependent_lessons!: Lesson[]

  @Column()
  title!: string;

  @Column("text")
  description!: string;

  @Column()
  order_index!: number;
}