import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./baseEntity";
import { Permission } from "./permission";

@Entity({ name: "professor"})
export class Professor extends BaseEntity{
  @Column({ name: "firstname" })
  firstName: string;

  @Column({ name: "lastname" })
  lastName: string;

  @Column({ name: "created_at" })
  createdAt: Date;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "permission_x_professor",
    joinColumns: [{ name: "professor_id" }],
    inverseJoinColumns: [{ name: "permission" }]
  })
  permissions: Permission[];
}