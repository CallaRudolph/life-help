import taskList from './../../src/reducers/task-list-reducer';
import c from './../../src/constants';

describe("Task list reducer", () => {
  let action;
  const taskInfo = {
    title : "Wash dishes",
    frequency : "weekly",
    completed : null,
    id : 0
  };

  test('should return equivalent state if no action type is recognized', () => {
    expect(taskList([], { type: null })).toEqual([]);
  });

  test('should add task to list array' () => {
    const { title, frequency, completed, id } = taskInfo;
    action = {
      type: c.ADD_TASK,
      title: title,
      frequency: frequency,
      completed: completed,
      id: id
    };
    const futureState = [ taskInfo ];
    expect(taskList([], action)).toEqual([ taskInfo ]);
  });

});
