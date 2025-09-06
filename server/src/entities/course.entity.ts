import { Column, Entity, OneToMany } from "typeorm";
import { CommonEntity } from "./common.entity";
import { Lesson } from "./lesson.entity";

@Entity()
export class Course extends CommonEntity {
  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @OneToMany(()=> Lesson, (lesson)=> lesson.course)
  lessons!: Lesson[];
}