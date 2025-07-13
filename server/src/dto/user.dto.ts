import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Name must be a string" })
  @MinLength(2, { message: "Name must be at least 2 characters long" })
  username!: string;

  @IsEmail({}, { message: "Invalid email format" })
  email!: string;

  @IsStrongPassword({}, { message: "Password is not strong" })
  password!: string;
}
