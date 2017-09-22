import taskList from './../../src/reducers/task-list-reducer';

describe("Task list reducer", () => {

  test('should return equivalent state if no action type is recognized', () => {
    expect(taskList([], { type: null })).toEqual([]);
  });

});
