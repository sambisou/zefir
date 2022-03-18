import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { GraphQLString } from "graphql";
import { IdentifiableModel } from "src/shared/identifiable.model";

@ObjectType("User")
export class GQLUser extends IdentifiableModel {
  @Field(() => GraphQLString)
  email!: string;

  @Field(() => GraphQLString, { nullable: true })
  firstName?: string;

  @Field(() => GraphQLString, { nullable: true })
  lastName?: string;
}

@InputType("UserInput")
export class GQLUserInput {
  @Field(() => GraphQLString)
  email!: string;

  @Field(() => GraphQLString, { nullable: true })
  firstName?: string;

  @Field(() => GraphQLString, { nullable: true })
  lastName?: string;
}
