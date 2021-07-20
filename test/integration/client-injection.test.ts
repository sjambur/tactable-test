import { ApiManager } from "../../src/api-manager";
import { Client } from "../../src/interface";
import { ToDo } from "../../src/interface";

describe("ApiManager tests", () => {
  let sut: ApiManager;
  let mockRepo: ToDo[] = new Array(
    {
      userId: 1,
      id: 100,
      title: "test1",
      completed: false,
    },
    {
      userId: 2,
      id: 101,
      title: "test2",
      completed: true,
    }
  );

  it("Should return ToDo value", () => {
    //Arrange
    const Mock = jest.fn<Client, []>(() => ({
      todoClient: jest.fn().mockReturnValue(mockRepo),
    }));
    const mock = new Mock();
    sut = new ApiManager(mock);

    //Act
    var result = sut.fetchData();

    //Assert
    expect(mock.todoClient).toHaveBeenCalled();
  });
});
