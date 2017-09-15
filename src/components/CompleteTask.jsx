import React from "react";
import Moment from "moment";

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
    var dateString = date.format("MMM Do YY, h:mm");
    this.setState({test: dateString});
  }

  render() {
    let formAreaContent = null;
    if (this.state.showComplete === false) {
      formAreaContent = <button onClick={this.completeTask}>Do it</button>
    } else {
      formAreaContent =
      <div>
        <p><em>Completed: {this.state.test} </em></p>
      <button onClick={this.completeTask}>Do it again</button>
      </div>
    }
    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default CompleteTask;
