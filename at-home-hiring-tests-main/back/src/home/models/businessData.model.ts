import { Field, ObjectType } from "@nestjs/graphql";
import { GraphQLFloat } from "graphql";
import { IdentifiableModel } from "src/shared/identifiable.model";

@ObjectType("BusinessData")
export class GQLBusinessData extends IdentifiableModel {
  @Field(() => GraphQLFloat, { nullable: true })
  initialOfferPrice?: number;

  @Field(() => GraphQLFloat, { nullable: true })
  finalOfferPrice?: number;

  @Field(() => GraphQLFloat, { nullable: true })
  targetSalePrice?: number;

  @Field(() => GraphQLFloat, { nullable: true })
  serviceFees?: number;

  @Field(() => GraphQLFloat, { nullable: true })
  negociationMargin?: number;
}
