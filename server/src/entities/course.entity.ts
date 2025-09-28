import { Column, Entity, OneToMany } from "typeorm";
import { CommonEntity } from "./common.entity";
import { Lesson } from "./lesson.entity";
import { IsOptional } from "class-validator";

@Entity()
export class Course extends CommonEntity {
  @Column({unique:true})
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons!: Lesson[];
}