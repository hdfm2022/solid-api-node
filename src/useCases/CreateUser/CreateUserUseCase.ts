import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) {

    }
    async execute(data: ICreateUserRequestDTO): Promise<User> {
        if (!data.email) {
            throw new Error("email field is mandatory");
        }
        if (!data.name) {
            throw new Error("name field is mandatory");
        }
        if (!data.password) {
            throw new Error("password field is mandatory");
        }

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "HM",
                email: "hdfmacedo@gmail.com",
            },
            subject: "bem vindo",
            body: "ok",
        })

        return user;
    }
}