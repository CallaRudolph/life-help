import taskList from './../../src/reducers/task-list-reducer';
import c from './../../src/constants';

describe("Task list reducer", () => {

  test('should return equivalent state if no action type is recognized', () => {
    expect(taskList([], { type: null })).toEqual([]);
  });

  test('imported value should match action type string', () => {
  expect(constants.ADD_TASK).toEqual('testing testing 123');
});

});
