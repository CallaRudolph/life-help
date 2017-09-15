import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Task(props) {
  return (
    <div>
      <h3>{props.task}</h3>
      <h4>Complete {props.frequency}</h4>
      <button>{props.task}</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
};

export default Task;
