import { IsString, IsNotEmpty, IsDate, IsUUID, IsDateString, Length } from 'class-validator';

export class CreateErrorLogDto {
  @IsNotEmpty()
  @IsUUID()
  user_id!: string;

  @IsNotEmpty()
  @IsUUID()
  typing_test_id!: string;

  @IsNotEmpty()
  @IsDateString()
  timestamp!: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 1)
  expected_character!: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 1)
  actual_character!: string;

  @IsNotEmpty()
  @IsString()
  context_left!: string;

  @IsNotEmpty()
  @IsString()
  context_right!: string;

  @IsNotEmpty()
  @IsString()
  word!: string;
}