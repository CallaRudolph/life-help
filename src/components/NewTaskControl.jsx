import React from "react";
import NewTaskForm from "./NewTaskForm";
import PropTypes from "prop-types";

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisible: false};
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({formVisible: true});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  render() {
    let formAreaContent = null;
    const formVisible = this.state.formVisible;
    if (formVisible) {
      formAreaContent = <NewTaskForm
        onNewTaskCreation={this.props.onNewTaskCreation}
        hideFormAfterSubmission={this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Add New Task</button>
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

NewTaskControl.propTypes = {
  onNewTaskCreation: PropTypes.func
}

export default NewTaskControl;
