import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateBadgeDto {

  @IsString({ message: "Name should be a string." })
  @IsNotEmpty()
  name!: string;

  @IsString({ message: "Description should be a string." })
  @IsOptional()
  description!: string;

  @IsString({ message: "Icon url should be a string" })
  @IsNotEmpty()
  icon_url!: string;

}