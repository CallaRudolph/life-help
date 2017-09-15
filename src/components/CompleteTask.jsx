import React from "react";
import Moment from "moment";
import PropTypes from "prop-types";

class CompleteTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showComplete: false,
                  test: null};
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    var newShowComplete = true;
    this.setState({showComplete: newShowComplete});
    var date = new Moment();
    var dateString = date.format("MMM Do YY, h:mm a");
    this.setState({test: dateString});
  }

  render() {
    console.log(this.props.taskName);
    let formAreaContent = null;
    if (this.state.showComplete === false) {
      formAreaContent = <button onClick={this.completeTask}>{this.props.taskName}</button>
    } else {
      formAreaContent =
      <div>
        <p><em>Completed: {this.state.test} </em></p>
      <button onClick={this.completeTask}>{this.props.taskName} again</button>
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
