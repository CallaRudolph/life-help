import React from "react";
import Moment from "moment";
import PropTypes from "prop-types";

class CompleteTask extends React.Component {

  constructor(props) {
    let timeCompleted = props.timeCompleted;
    super(props);
    this.state = {timeCompleted};
    this.complete = this.complete.bind(this);
  }

  complete() {
    var newTimeCompleted = this.state.timeCompleted;
    newTimeCompleted = "now";
    this.setState({timeCompleted: newTimeCompleted});
  }

  render() {
    let formAreaContent = null;
    const timeCompleted = this.state.timeCompleted;
    if (timeCompleted === "now") {
      formAreaContent =
      <div>
        <p><em>Completed: </em> {timeCompleted}</p>
        <button onClick={this.complete}>Do it again</button>
      </div>
    } else {
      formAreaContent = <button onClick={this.complete}>Do it</button>
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

CompleteTask.propTypes = {
  timeCompleted: PropTypes.string
}

export default CompleteTask;
