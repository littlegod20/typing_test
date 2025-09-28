import { IsOptional, IsString } from "class-validator";
import { Unique } from "typeorm";

export class CourseDto {
  @IsString({ message: "Course name must exist!" })
  name!: string;

  @IsString({ message: "Description must be a string" })
  @IsOptional()
  description!: string;
}
