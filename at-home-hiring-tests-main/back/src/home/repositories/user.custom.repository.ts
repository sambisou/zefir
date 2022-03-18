import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export default class UserCustomRepository extends Repository<User> {}
