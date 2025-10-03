import { IsEnum, IsOptional, IsString } from "class-validator";
import { DifficultyLevel, KeyboardSetting, ThemeSetting } from "../enums";

export class CreateSettingsDto {
  @IsEnum(ThemeSetting)
  @IsOptional()
  theme!: ThemeSetting

  @IsEnum(KeyboardSetting)
  @IsOptional()
  keyboard_sound!: KeyboardSetting

  @IsEnum(DifficultyLevel)
  @IsOptional()
  difficulty!: DifficultyLevel;

  @IsString({ message: "words per minute goal should be a string." })
  @IsOptional()
  words_per_minute_goal!: string;
}