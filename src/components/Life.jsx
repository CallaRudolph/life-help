import React from "react";
import NewTaskControl from "./NewTaskControl";
import TaskList from "./TaskList";
import {connect} from 'react-redux';

class Life extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewTaskControl/>
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
