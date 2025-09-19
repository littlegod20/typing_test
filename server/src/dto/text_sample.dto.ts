import { IsEnum, IsString, MinLength } from "class-validator";
import { Category, DifficultyLevel, Language } from "../enums";


export class CreateTextSampleDto {

  @IsString({ message: "Text sample must contain content" })
  @MinLength(10, { message: "Content must be at least 10 character long" })
  content!: string;

  @IsString({ message: "Text sample must contain title" })
  title!: string;

  @IsEnum(Category, { message: "Category must be a valid category : [lesson, drill, quote, game]" })
  category!: Category;

  @IsEnum(DifficultyLevel, { message: "Difficulty level must be a valid level : [beginner, intermediate, expert]" })
  difficulty_level!: DifficultyLevel;

  @IsEnum(Language, { message: "Language must be listed here : [english, spanish, frentch , german]" })
  language!: Language;

  @IsString({ message: "Provide the source of the sample" })
  source!: string;
}