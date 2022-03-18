import { IdentifiableEntity } from "src/shared/identifiable.entity";
import { Column, Entity } from "typeorm";

@Entity("user")
export class User extends IdentifiableEntity {
  @Column({ name: "email" })
  email!: string;

  @Column({ name: "first_name", nullable: true })
  firstName?: string;

  @Column({ name: "last_name", nullable: true })
  lastName?: string;
}
