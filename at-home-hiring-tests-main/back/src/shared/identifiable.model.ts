import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType("BaseModel", { isAbstract: true })
export abstract class IdentifiableModel {
  @Field(() => ID)
  uuid!: string;
}
