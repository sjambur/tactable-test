import { TodoClient } from "./todo-client";

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Client {
  todoClient: () => Promise<ToDo>;
}

export interface Manager {
  client: Client;
  fetchData: () => void;
}
