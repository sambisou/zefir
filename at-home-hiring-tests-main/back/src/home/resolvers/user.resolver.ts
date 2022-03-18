import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GQLUser, GQLUserInput } from "../models/user.model";
import UserService from "../services/user.service";

@Resolver(() => GQLUser)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => GQLUser)
  async createUser(
    @Args("input", { type: () => GQLUserInput })
    userInput: GQLUserInput
  ): Promise<GQLUser> {
    return this.userService.createUser(userInput);
  }

  @Query(() => GQLUser)
  async getUser(
    @Args("uuid", { type: () => ID })
    uuid: string
  ): Promise<GQLUser> {
    return this.userService.findUser(uuid);
  }
}
