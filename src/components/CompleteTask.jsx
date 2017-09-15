import React from "react";
import Moment from "moment";
import PropTypes from "prop-types";

class CompleteTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showComplete: false};
    this.showCompletedTime = this.showCompletedTime.bind(this);
  }

  showCompletedTime() {
    var newShowComplete = true;
    this.setState({showComplete: newShowComplete});
  }

  render() {
    let formAreaContent = null;
    if (this.state.showComplete === false) {
      formAreaContent = <button onClick={this.showCompletedTime}>Do it</button>
    } else {
      formAreaContent =
      <div>
        <p><em>Completed: {this.props.timeSinceCompleted} ago </em></p>
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
