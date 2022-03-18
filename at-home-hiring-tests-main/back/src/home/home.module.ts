import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import BusinessDataCustomRepository from "./repositories/businessData.custom.repository";
import HomeCustomRepository from "./repositories/home.custom.repository";
import UserCustomRepository from "./repositories/user.custom.repository";
import { BusinessDataResolver } from "./resolvers/businessData.resolver";
import { HomeResolver } from "./resolvers/home.resolver";
import { UserResolver } from "./resolvers/user.resolver";
import BusinessDataService from "./services/businessData.service";
import HomeService from "./services/home.service";
import UserService from "./services/user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([HomeCustomRepository]),
    TypeOrmModule.forFeature([BusinessDataCustomRepository]),
    TypeOrmModule.forFeature([UserCustomRepository]),
  ],
  providers: [
    HomeService,
    HomeResolver,
    BusinessDataService,
    BusinessDataResolver,
    UserService,
    UserResolver,
  ],
  exports: [],
})
export class HomeModule {}
