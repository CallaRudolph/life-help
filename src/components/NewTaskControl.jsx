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
    var cupcake = {
      width: "30"
    }
    var modalHeader = {
      backgroundColor: "#B7E3CC"
    }
    var modalTitle = {
      color: "#7D82B8",
      display: "inline-block"
    }
    var modalBody = {
      backgroundColor: "#B7E3CC"
    }
    return (
      <div>
        <br/>
        <Button
          block
          bsStyle="info"
          bsSize="large" onClick={this.showFormModal}>
            <img style={cupcake} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
            Add New Task
            <img style={cupcake} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
        </Button>
        <br/>
      <Modal
          show={this.state.formModalVisible}
          onHide={this.hideFormModal}>
          <Modal.Header style={modalHeader}>
            <Modal.Title style={modalTitle}>
              Add task
              <img style={cupcake} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
              <img style={cupcake} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalBody}>
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
