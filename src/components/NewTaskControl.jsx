import React from "react";

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisible: false};
    this.handleDisplayingForm = this.handleDisplayingForm.bind(this);
  }

  handleDisplayingForm(event) {
    this.setState({formVisible: true});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDisplayingForm}>Add New Task</button>
      </div>
    );
  }
}

export default NewTaskControl;
