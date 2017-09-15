import React from "react";

class CompleteTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {timeComplete: null};
    this.complete = this.complete.bind(this);
  }

  complete() {
    var newTimeComplete = this.state.timeComplete;
    newTimeComplete = "now";
    this.setState({timeComplete: newTimeComplete});
  }

  render() {
    let formAreaContent = null;
    const timeComplete = this.state.timeComplete;
    if (timeComplete) {
      formAreaContent = <p><em>Completed: </em> {timeComplete}</p>;
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

export default CompleteTask;
