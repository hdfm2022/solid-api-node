import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MemoryUserRepository } from "../../repositories/implementations/MemoryUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const memoryUserRepository = new MemoryUserRepository();

const createUserUseCase = new CreateUserUseCase(
    memoryUserRepository
    , mailtrapMailProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }