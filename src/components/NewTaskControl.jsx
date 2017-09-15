import React from "react";
import NewTaskForm from "./NewTaskForm";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formModalVisible: false};
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
  }

  showFormModal() {
    this.setState({formModalVisible: true});
  }

  hideFormModal() {
    this.setState({formModalVisible: false});
  }

  render() {
    return (
      <div>
        <Button
          block
          bsStyle="info"
          bsSize="large" onClick={this.showFormModal}>
            Add New Task
        </Button>
        <Modal
          show={this.state.formModalVisible}
          onHide={this.hideFormModal}>
          <Modal.Header>
            <Modal.Title>Add task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewTaskForm
              onNewTaskCreation={this.props.onNewTaskCreation}
              hideFormAfterSubmission={this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

NewTaskControl.propTypes = {
  onNewTaskCreation: PropTypes.func
}

export default NewTaskControl;
