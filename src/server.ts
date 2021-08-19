import { app } from "./app";
import { User } from "./entities/User";
import { createUserController, createUserUseCase } from "./useCases/CreateUser";

const PORT = 3333;
app.listen(PORT);
//console.clear();
console.log(new Date());
console.log("Live in :" + PORT);

// console.log(new User({email: "hdfmacedo@gmail.com", name: "Henrique", password: "360210"}));
// createUserUseCase.execute({email: "hdfmacedo@gmail.com", name: "Teste", password: "123"});
// setTimeout(
//       () => createUserUseCase.execute({email: "hdfmacedo@gmail.com", name: "Teste", password: "123"})
//     , 1000
//     )
// ;