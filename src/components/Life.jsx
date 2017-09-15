import React from "react";
import NewTaskControl from "./NewTaskControl";
import TaskList from "./TaskList";

function Life(props) {
  return (
    <div>
      <NewTaskControl/>
      <TaskList/>
    </div>
  );
}

export default Life;
