import React from "react";
import PropTypes from "prop-types";

function Task(props) {
  return (
    <div>
      <h3>{props.task}</h3>
      <h4>Complete {props.frequency}</h4>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired
};

export default Task;
