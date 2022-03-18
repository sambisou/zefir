import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial } from "typeorm";
import { User } from "../entities/user.entity";
import UserCustomRepository from "../repositories/user.custom.repository";

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserCustomRepository)
    private readonly userRepository: UserCustomRepository
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async findUser(uuid: string): Promise<User> {
    const results = await this.userRepository.findByIds([uuid]);
    if (results.length !== 1) {
      throw Error(`Could not find user with uuid ${uuid}`);
    }
    return results[0];
  }

  async createUser(inputUser: DeepPartial<User>): Promise<User> {
    const user = await this.userRepository.create(inputUser);
    return this.userRepository.save(user);
  }

  async deleteUser(uuid: string): Promise<number> {
    const result = await this.userRepository.delete({ uuid: uuid });
    if (!result.affected) {
      throw Error(`Could not delete user with uuid ${uuid}`);
    }
    return result.affected;
  }

  async updateUser(uuid: string, update: DeepPartial<User>): Promise<number> {
    const result = await this.userRepository.update({ uuid: uuid }, update);
    if (!result.affected) {
      throw Error(`Could not update user with uuid ${uuid}`);
    }
    return result.affected;
  }
}
