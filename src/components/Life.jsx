import React from "react";
import NewTaskControl from "./NewTaskControl";
import TaskList from "./TaskList";

class Life extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTaskList: [],
    };
  }

  render() {
    return (
      <div>
        <NewTaskControl/>
        <TaskList
          taskList = {this.state.masterTaskList}/>
      </div>
    );
  }
}

export default Life;
