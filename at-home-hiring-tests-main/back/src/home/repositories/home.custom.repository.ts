import { EntityRepository, Repository } from "typeorm";
import { Home } from "../entities/home.entity";

@EntityRepository(Home)
export default class HomeCustomRepository extends Repository<Home> {}
