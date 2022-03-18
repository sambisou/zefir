import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GraphQLFloat } from "graphql";
import { GQLBusinessData } from "../models/businessData.model";
import BusinessDataService from "../services/businessData.service";

@Resolver(() => GQLBusinessData)
export class BusinessDataResolver {
  constructor(private readonly businessDataService: BusinessDataService) {}

  @Mutation(() => GQLBusinessData)
  async generateBusinessDataForHome(
    @Args("homeUuid", { type: () => ID })
    homeUuid: string,
    @Args("initialOfferPrice", { type: () => GraphQLFloat })
    initialOfferPrice: number,
    @Args("finalOfferPrice", { type: () => GraphQLFloat })
    finalOfferPrice: number,
    @Args("targetSalePrice", { type: () => GraphQLFloat })
    targetSalePrice: number
  ): Promise<GQLBusinessData> {
    return this.businessDataService.generateBusinessDataForHome(
      homeUuid,
      initialOfferPrice,
      finalOfferPrice,
      targetSalePrice
    );
  }

  @Query(() => GQLBusinessData)
  async getBusinessDataFromHomeUuid(
    @Args("homeUuid", { type: () => ID })
    homeUuid: string
  ): Promise<GQLBusinessData> {
    return this.businessDataService.findBusinessDataByHomeUuid(homeUuid);
  }
}
