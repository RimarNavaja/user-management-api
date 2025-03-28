import { Repository } from "typeorm";
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
}
