import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { GraphQLFloat, GraphQLString } from "graphql";
import { IdentifiableModel } from "src/shared/identifiable.model";

@ObjectType("Home")
export class GQLHome extends IdentifiableModel {
  @Field(() => GraphQLString)
  zipcode!: string;

  @Field(() => GraphQLFloat, { nullable: true })
  surfaceM2?: number;
}

@InputType("HomeInput")
export class GQLHomeInput {
  @Field(() => GraphQLString)
  zipcode!: string;

  @Field(() => GraphQLFloat, { nullable: true })
  surfaceM2?: number;
}
