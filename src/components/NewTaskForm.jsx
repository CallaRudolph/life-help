import React from "react";
import Task from "../models/Task.js";
import PropTypes from "prop-types";

class NewTaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask(event) {
    event.preventDefault()
    const { _task, _frequency } = this.refs;
    var newTask = new Task(_task.value, _frequency.value);
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

NewTaskForm.propTypes = {
  onNewTaskCreation: PropTypes.func
}

export default NewTaskForm;
