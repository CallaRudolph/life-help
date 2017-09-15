import React from "react";
import PropTypes from "prop-types";
import CompleteTask from "./CompleteTask";
import Background from '../images/background.jpg';

function Task(props) {
  let img = '..images/background.jpg'
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
    color: "#7b4b94"
  }
  var heart = {
    width: "40",
    float: "right",
    display: "inline-block"
  }
  return (
    <ul className="list-unstyled">
      <div style={flexItem}>
        <li>
          <div style={well} className="well">
            <h3>{props.task}</h3>
            <h4>Complete {props.frequency}</h4>
            <CompleteTask taskName={props.task}/>
            <img style={heart} src="http://www.freeiconspng.com/uploads/pink-heart-png-12.png"/>
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
