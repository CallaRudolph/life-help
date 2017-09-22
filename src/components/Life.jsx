import React from "react";
import NewTaskControl from "./NewTaskControl";
import TaskList from "./TaskList";
import {connect} from 'react-redux';

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

  render() {
    return (
      <div>
        <NewTaskControl onNewTaskCreation={this.addNewTaskToList}/>
        <TaskList
          taskList = {this.props.masterTaskList}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTaskList : state
  }
}

export default connect(mapStateToProps)(Life);
