import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({type: "timestamp"})
  createdAt!: Date;

  @Column({ type: "timestamp" })
  updatedAt!: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  deletedAt!: Date | null;
}
