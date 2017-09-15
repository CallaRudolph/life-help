import React from "react";
import PropTypes from "prop-types";
import CompleteTask from "./CompleteTask";

function Task(props) {
  var flexItem = {
    margin: "5",
    order: "1",
    flexGrow: "1",
    wordBreak: "normal",
    minWidth: "275",
    maxWidth: "290",
  }
  return (
    <ul className="list-unstyled">
      <div style={flexItem}>
        <li>
          <div className="well">
            <h3>{props.task}</h3>
            <h4>Complete {props.frequency}</h4>
            <CompleteTask taskName={props.task}/>
          </div>
        </li>
      </div>
    </ul>
  );
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired
};

export default Task;
