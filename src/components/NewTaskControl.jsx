import React from "react";
import NewTaskForm from "./NewTaskForm";
import PropTypes from "prop-types";

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
      formAreaContent = <NewTaskForm
        onNewTaskCreation={this.props.onNewTaskCreation}/>
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

NewTaskControl.propTypes = {
  onNewTaskCreation: PropTypes.func
}

export default NewTaskControl;
