import { inject, injectable } from "inversify";
import { Client, Manager, ToDo } from "./interface";
import "reflect-metadata";

@injectable()
export class ApiManager implements Manager {
  client: Client;
  constructor(@inject("Client") client: Client) {
    this.client = client;
  }

  async fetchData() {
    let res = await this.client.todoClient();
    console.log(res);
  }
}
