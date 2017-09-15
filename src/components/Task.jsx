import React from "react";
import PropTypes from "prop-types";
import CompleteTask from "./CompleteTask";

function Task(props) {
  return (
    <div>
      <h3>{props.task}</h3>
      <h4>Complete {props.frequency}</h4>
      <CompleteTask
        timeSinceCompleted={props.timeSinceCompleted}/>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  timeSinceCompleted: PropTypes.string.isRequired
};

export default Task;
