import { injectable } from "inversify";
import { Client } from "./interface";
import "reflect-metadata";
import { getTodos } from "./utils/todo-api";

@injectable()
export class TodoClient implements Client {
  async todoClient<T>(): Promise<T> {
    return getTodos();
  }
}
