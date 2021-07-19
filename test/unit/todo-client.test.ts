import fetch from "node-fetch";
import { mocked } from "ts-jest/utils";
import { getTodos } from "../../src/utils/todo-api";

jest.mock("node-fetch", () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
});

describe("getTodos test", () => {
  test("getTodos should fetch todos", async () => {
    // provide a mock implementation for the mocked fetch:
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve({
            userId: 1,
            id: 100,
            title: "test",
            completed: false,
          });
        },
      });
    });

    // getTodos uses the mock implementation for fetch:
    const todos = await getTodos();
    expect(mocked(fetch).mock.calls.length).toBe(1);
    expect(todos).toBeDefined();
    expect(todos.userId).toBe(1);
    expect(todos.id).toBe(100);
    expect(todos.title).toBe("test");
    expect(todos.completed).toBe(false);
  });
});
