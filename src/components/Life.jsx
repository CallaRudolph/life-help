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
    newMasterTaskList.push(newTask);
    this.setState({masterTaskList: newMasterTaskList});
  }

  updateTimeSinceCompleted() {
    console.log("check");
    let newMasterTaskList = this.state.masterTaskList.slice();
    newMasterTaskList.forEach((task) =>
      task.setTimeSinceCompleted()
    );
    this.setState({masterTaskList: newMasterTaskList});
  }

  componentDidMount() {
    this.timeSinceCompletedChecker = setInterval(() =>
      this.updateTimeSinceCompleted(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceCompletedChecker);
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
