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
    let formAreaContent = null;
    if (this.state.formVisible) {
      formAreaContent = <h1>Future form</h1>
    } else {
      formAreaContent = <button onClick={this.handleDisplayingForm}>Add New Task</button>
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default NewTaskControl;
