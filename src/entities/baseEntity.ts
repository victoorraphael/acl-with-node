import { CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export class BaseEntity {
  @PrimaryColumn()
  id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}