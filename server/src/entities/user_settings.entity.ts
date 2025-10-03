import { Column, Entity, OneToOne } from "typeorm";
import { CommonEntity } from "./common.entity";
import { DifficultyLevel, KeyboardSetting, ThemeSetting } from "../enums";
import { User } from "./user.entity";


@Entity()
export class UserSettings extends CommonEntity {
  @Column({ type: "enum", enum: ThemeSetting, default: ThemeSetting.LIGHT })
  theme!: ThemeSetting

  @Column({ type: "enum", enum: KeyboardSetting, default: KeyboardSetting.ON })
  keyboard_sound!: KeyboardSetting

  @Column({ type: "enum", enum: DifficultyLevel, default: DifficultyLevel.BEGINNER })
  difficulty!: DifficultyLevel;

  @Column({ nullable: true, default:'40' })
  words_per_minute_goal!: string;

  @OneToOne(() => User, (user) => user.user_settings)
  user!: User
}