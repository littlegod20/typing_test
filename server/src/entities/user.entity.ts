import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { CommonEntity } from "./common.entity";
import { TypingTest } from "./typing_test.entity";
import { UserProgress } from "./user_progress.entity";
import { ErrorLog } from "./error_log.entity";
import { UserBadge } from "./user_badge.entity";
import { UserSettings } from "./user_settings.entity";

@Entity("users")
export class User extends CommonEntity {
  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  @IsNotEmpty()
  password!: string;

  @OneToMany(() => UserProgress, (user_progress) => user_progress.user)
  user_progress!: UserProgress[];

  @OneToMany(() => ErrorLog, (error_log) => error_log.user)
  error_logs!: ErrorLog[];

  @OneToMany(() => UserBadge, (user_badge) => user_badge.user)
  user_badges!: UserBadge[]

  @OneToMany(() => TypingTest, (typing_test) => typing_test.user)
  typing_tests!: TypingTest[]

  @OneToOne(() => UserSettings, (user_settings) => user_settings.user)
  @JoinColumn({ name: "user_settings_id" })
  user_settings!: UserSettings

}
