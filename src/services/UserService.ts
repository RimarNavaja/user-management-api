import { Repository, FindOneOptions } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../config/database";

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async deleteUser(id: number): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return false;
    }

    const result = await this.userRepository.delete(id);
    return result.affected ? true : false;
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  async getAllUsers(
    page: number = 1,
    limit: number = 10
  ): Promise<{ users: User[]; total: number }> {
    const [users, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: "DESC" },
    });

    return { users, total };
  }

  async getUserById(id: number): Promise<User | null> {
    const options: FindOneOptions<User> = { where: { id } };
    return await this.userRepository.findOne(options);
  }
}
