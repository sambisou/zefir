import { Args, ID, Mutation, Resolver, Query } from "@nestjs/graphql";
import { GQLHome, GQLHomeInput } from "../models/home.model";
import HomeService from "../services/home.service";

@Resolver(() => GQLHome)
export class HomeResolver {
  constructor(private readonly homeService: HomeService) {}

  @Mutation(() => GQLHome)
  async createHome(
    @Args("input", { type: () => GQLHomeInput })
    homeInput: GQLHomeInput
  ): Promise<GQLHome> {
    return this.homeService.createHome(homeInput);
  }

  @Query(() => GQLHome)
  async getHome(
    @Args("uuid", { type: () => ID })
    uuid: string
  ): Promise<GQLHome> {
    return this.homeService.findHome(uuid);
  }
}
