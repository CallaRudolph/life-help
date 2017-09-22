export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const { title, frequency, completed, id } = action;
      return [
        ...state,
        {
          title: title,
          frequency: frequency,
          completed: completed,
          id: id
        }
      ]
    default:
      return state;
  }
}
