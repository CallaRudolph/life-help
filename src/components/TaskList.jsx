import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

function TaskList(props) {
  var flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: "30",
  }
  return (
    <div style={flexContainer}>
      {props.taskList.map((task, index) =>
        <Task task={task.title}
              frequency={task.frequency}
              completed={task.completed}
              id={task.id}
              key={index}/>
      )}
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.array
}

export default TaskList;
