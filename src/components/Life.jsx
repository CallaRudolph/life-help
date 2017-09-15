import React from "react";
import NewTaskControl from "./NewTaskControl";
import TaskList from "./TaskList";

class Life extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTaskList: [],
    };
    this.addNewTaskToList = this.addNewTaskToList.bind(this);
  }

  addNewTaskToList(newTask) {
    var newMasterTaskList = this.state.masterTaskList.slice();
    newMasterTaskList.push(newTicket);
    this.setState({masterTaskList: newMasterTaskList});
  }

  render() {
    return (
      <div>
        <NewTaskControl onNewTaskCreation={this.addNewTaskToList}/>
        <TaskList
          taskList = {this.state.masterTaskList}/>
      </div>
    );
  }
}

export default Life;
