import React from "react";
import NewTaskForm from "./NewTaskForm";

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
    const formVisible = this.state.formVisible;
    if (formVisible) {
      formAreaContent = <NewTaskForm/>
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
