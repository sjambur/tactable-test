import fetch from "node-fetch";

export async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const body = await res.json();
  return body;
}
