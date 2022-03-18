import { EntityRepository, Repository } from "typeorm";
import { BusinessData } from "../entities/businessData.entity";

@EntityRepository(BusinessData)
export default class BusinessDataCustomRepository extends Repository<BusinessData> {}
