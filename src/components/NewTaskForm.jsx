import React from "react";
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
    const { _title, _frequency } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_TASK,
      id: null,
      title: _title.value,
      frequency: _frequency.value,
      completed: null,
    }
    dispatch(action);
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
            ref="_title"
            type="text"
            id="title"
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
  hideFormAfterSubmission: PropTypes.func
}

export default connect()(NewTaskForm);
