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
    var addButton = {
      fontSize: "30",
      textShadow: "1px 1px purple"
    }
    var cupcake1 = {
      width: "30",
      float: "left"
    }
    var cupcake2 = {
      width: "30",
      float: "right"
    }
    var cupcake = {
      width: "30"
    }
    var modal = {
      fontFamily: "'Poiret One', cursive"
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
          style={addButton}
          bsStyle="info"
          bsSize="large" onClick={this.showFormModal}>
            <img style={cupcake1} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
            <img style={cupcake1} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
            Add New Task
            <img style={cupcake2} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
            <img style={cupcake2} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
        </Button>
        <br/>
      <Modal
          style={modal}
          show={this.state.formModalVisible}
          onHide={this.hideFormModal}>
          <Modal.Header style={modalHeader}>
            <Modal.Title style={modalTitle}>
              <em>So you have something to do . . . </em>
              <img style={cupcake} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
              <img style={cupcake} src="https://s-media-cache-ak0.pinimg.com/originals/ec/21/7a/ec217aa73549dce7b5bb9ed1b470c3b8.png"/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalBody}>
            <NewTaskForm
              hideFormAfterSubmission={this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewTaskControl;
