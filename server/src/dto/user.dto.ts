import {
  IsEmail,
  IsString,
  Matches,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Name must be a string" })
  @MinLength(2, { message: "Name must be at least 2 characters long" })
  @Matches(/^\w+$/, {
    message: "Username can only contain letters, numbers and underscores",
  })
  username!: string;

  @IsEmail({}, { message: "Invalid email format" })
  email!: string;

  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, {
    message:
      "Password must be 6 characters containing at least: 1 letter, 1 number",
  })
  password!: string;
}
