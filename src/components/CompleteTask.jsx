import React from "react";
import Moment from "moment";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class CompleteTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showComplete: false,
                  completedTime: null};
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    var newShowComplete = true;
    this.setState({showComplete: newShowComplete});
    var date = new Moment();
    var dateString = date.format("MMM Do, h:mm a");
    this.setState({completedTime: dateString});
  }

  render() {
    console.log(this.props.taskName);
    let formAreaContent = null;
    if (this.state.showComplete === false) {
      formAreaContent =
        <Button
          bsStyle="success" onClick={this.completeTask}>
          {this.props.taskName}</Button>
    } else {
      formAreaContent =
      <div>
        <p><em>Completed: {this.state.completedTime} </em></p>
        <Button
          bsStyle="success" onClick={this.completeTask}>
          {this.props.taskName} again</Button>
      </div>
    }
    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

CompleteTask.propTypes = {
  taskName: PropTypes.string.isRequired
}

export default CompleteTask;
