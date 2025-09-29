import { Column, Entity, OneToMany } from "typeorm";
import { CommonEntity } from "./common.entity";
import { UserBadge } from "./user_badge.entity";
import { IsOptional } from "class-validator";


@Entity()
export class Badge extends CommonEntity {

  @Column()
  name!: string;

  @Column("text", { nullable: true })
  description!: string;

  @Column()
  icon_url!: string;

  @OneToMany(() => UserBadge, (user_badge) => user_badge.badge)
  user_badges!: UserBadge[]
}