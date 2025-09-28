import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";


export class CreateLessonDto {

  @IsUUID()
  @IsNotEmpty()
  course_id!: string;

  @IsUUID()
  @IsNotEmpty()
  text_sample_id!: string;

  @IsUUID()
  @IsOptional()
  prerequisite_lesson_id!: string | null;

  @IsString({ message: "Title must be a string" })
  @IsNotEmpty()
  title!: string;

  @IsString({ message: "Description must be a string" })
  @IsOptional()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  order_index!: number
}