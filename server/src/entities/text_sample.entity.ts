import { Column, Entity, OneToMany } from "typeorm";
import { Category, DifficultyLevel, Language } from "../enums"
import { CommonEntity } from "./common.entity";
import { TypingTest } from "./typing_test.entity";


@Entity()
export class TextSample extends CommonEntity {

  @Column()
  title!: string;

  @Column("text")
  content!: string;

  @Column({ type: "enum", enum: Category, default: Category.QUOTE })
  category!: Category;

  @Column({ type: "enum", enum: DifficultyLevel, default: DifficultyLevel.BEGINNER })
  difficulty_level!: DifficultyLevel;

  @Column({ type: 'enum', enum: Language, default: Language.ENGLISH })
  language!: Language

  @Column()
  source!: string;

  @OneToMany(() => TypingTest, (typing_test) => typing_test.text_sample)
  typing_tests!: TypingTest[]

}