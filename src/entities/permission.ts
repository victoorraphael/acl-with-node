import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "permission" })
export class Permission {
  @PrimaryColumn()
  id: number;

  @Column({ name: "permission_type" })
  type: string;
}