import React from "react";
import Moment from "moment";
import PropTypes from "prop-types";

class CompleteTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showComplete: false,
                  taskComplete: new Moment(),
                  taskSinceCompleted: "a few seconds"};
    this.showCompletedTime = this.showCompletedTime.bind(this);
    this.setTaskSinceCompleted = this.setTaskSinceCompleted.bind(this);
  }

  setTaskSinceCompleted() {
    this.state.taskSinceCompleted = this.state.taskComplete.fromNow(true);
  }

  showCompletedTime() {
    var newShowComplete = true;
    this.setState({showComplete: newShowComplete});
  }

  componentDidMount() {
    console.log("check");
    this.timeSinceCompletedChecker = setInterval(() =>
      this.setTaskSinceCompleted(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceCompletedChecker);
  }

  render() {
    let formAreaContent = null;
    if (this.state.showComplete === false) {
      formAreaContent = <button onClick={this.showCompletedTime}>Do it</button>
    } else {
      formAreaContent =
      <div>
        <p><em>Completed: {this.state.taskSinceCompleted} ago </em></p>
      <button onClick={this.showCompletedTime}>Do it again</button>
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
  timeSinceCompleted: PropTypes.string
}

export default CompleteTask;
