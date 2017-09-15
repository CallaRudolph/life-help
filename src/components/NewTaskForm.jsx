import React from "react";

class NewTaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask(event) {
    event.preventDefault()
    const { _task, _frequency } = this.refs;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewTask}>
          <textarea
            ref="_task"
            type="text"
            id="task"
            placeholder="What do you need to do?"/>
          <br/>
          <input
            ref="frequency"
            type="text"
            id="frequency"
            placeholder="Frequency"/>
          <br/><br/>
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
