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
  var well = {
    backgroundColor: "#b7e3cc",
    color: "#7b4b94",
    fontSize: "20"
  }
  var heart = {
    width: "40",
    float: "right"
  }
  return (
    <ul className="list-unstyled">
      <div style={flexItem}>
        <li>
          <div style={well} className="well">
            <img style={heart} src="http://www.freeiconspng.com/uploads/pink-heart-png-12.png"/>
            <h1>{props.title}</h1>
            <h4>Complete {props.frequency}</h4>
            <CompleteTask taskTitle={props.title}
                          completed={props.completed}/>
          </div>
        </li>
      </div>
    </ul>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  completed: PropTypes.string,
  id: PropTypes.string
};

export default Task;
