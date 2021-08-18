import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MemoryUserRepository implements IUsersRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        console.log(this.users);
        const user = this.users.find(user => user.email === email);
        return user;
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}