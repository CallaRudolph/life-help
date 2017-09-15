import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

function TaskList(props) {
  return (
    <div>
      {props.taskList.map((task, index) =>
        <Task task={task.task}
              frequency={task.frequency}
            key={index}/>
      )}
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.array
}

export default TaskList;
