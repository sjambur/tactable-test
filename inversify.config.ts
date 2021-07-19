import { Container } from "inversify";
import { ApiManager } from "./src/api-manager";
import { Client } from "./src/interface";
import { TodoClient } from "./src/todo-client";

let container = new Container();

container.bind<Client>("Client").to(TodoClient);
container.bind<ApiManager>("ApiManager").to(ApiManager);

export { container };
