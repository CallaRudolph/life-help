import React from "react";

class NewTaskForm extends React.Component {

  handleNewTask(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={handleNewTask}>
          <textarea
            ref="_task"
            type="text"
            id="task"
            placeholder="What do you need to do?"/>
          <input
            ref="frequency"
            type="text"
            id="frequency"
            placeholder="Frequency"/>
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
