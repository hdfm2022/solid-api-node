import { app } from "./app";
import { User } from "./entities/User";
import { createUserController, createUserUseCase } from "./useCases/CreateUser";

app.listen(3333);
//console.clear();
console.log(new Date());
console.log("Live");

console.log(new User({email: "hdfmacedo@gmail.com", name: "Henrique", password: "360210"}));
createUserUseCase.execute({email: "hdfmacedo@gmail.com", name: "Teste", password: "123"});
setTimeout(
      () => createUserUseCase.execute({email: "hdfmacedo@gmail.com", name: "Teste", password: "123"})
    , 1000
    )
;