import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial } from "typeorm";
import { Home } from "../entities/home.entity";
import HomeCustomRepository from "../repositories/home.custom.repository";

@Injectable()
export default class HomeService {
  constructor(
    @InjectRepository(HomeCustomRepository)
    private readonly homeRepository: HomeCustomRepository
  ) {}

  async getAllHomes(): Promise<Home[]> {
    return this.homeRepository.find({});
  }

  async findHome(uuid: string): Promise<Home> {
    const results = await this.homeRepository.findByIds([uuid]);
    if (results.length !== 1) {
      throw Error(`Could not find home with uuid ${uuid}`);
    }
    return results[0];
  }

  async createHome(homeInput: DeepPartial<Home>): Promise<Home> {
    const home = await this.homeRepository.create(homeInput);
    return this.homeRepository.save(home);
  }

  async deleteHome(uuid: string): Promise<number> {
    const result = await this.homeRepository.delete({ uuid: uuid });
    if (!result.affected) {
      throw Error(`Could not delete home with uuid ${uuid}`);
    }
    return result.affected;
  }

  async updateHome(uuid: string, update: DeepPartial<Home>): Promise<number> {
    const result = await this.homeRepository.update({ uuid: uuid }, update);
    if (!result.affected) {
      throw Error(`Could not update home with uuid ${uuid}`);
    }
    return result.affected;
  }
}
