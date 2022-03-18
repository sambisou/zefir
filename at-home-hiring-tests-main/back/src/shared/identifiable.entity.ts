import { BeforeInsert, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export function generateRandomUuid(): string {
  return uuidv4();
}

export abstract class IdentifiableEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @BeforeInsert()
  setRandomUuid(): void {
    this.uuid = generateRandomUuid();
  }
}
