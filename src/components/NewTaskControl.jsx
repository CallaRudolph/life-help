import React from "react";

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  render() {
    return (
      <div>
        <button>Add New Task</button>
      </div>
    );
  }
}

export default NewTaskControl;
