import React from "react";
import Task from "../models/Task.js";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import c from './../constants';

class NewTaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask(event) {
    event.preventDefault()
    const { _task, _frequency } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_TASK,
      id: null,
      title: _task.value,
      frequency: _frequency.value,
      completed: null;
    }
    dispatch(action);
    var newTask = new Task(_task.value, _frequency.value);
    this.props.onNewTaskCreation(newTask);
    this.props.hideFormAfterSubmission();
  }

  render() {
    var button = {
      backgroundColor: "#7D82B8",
      color: "white"
    }
    var heart = {
      width: "40",
      float: "right"
    }
    var input = {
      fontSize: "16",
      width: "190"
    }
    return (
      <div>
        <form onSubmit={this.handleNewTask}>
          <textarea
            style={input}
            ref="_task"
            type="text"
            id="task"
            placeholder="What do you need to do?"/>
          <br/>
          <input
            style={input}
            ref="_frequency"
            type="text"
            id="frequency"
            placeholder="Frequency (ex. 'daily')"/>
          <br/><br/>
          <Button style={button} type="submit">Add task</Button>
          <img style={heart} src="http://www.freeiconspng.com/uploads/pink-heart-png-12.png"/>
        </form>
      </div>
    );
  }
}

NewTaskForm.propTypes = {
  onNewTaskCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

NewTaskForm = connect()(NewTaskForm);

export default NewTaskForm;
