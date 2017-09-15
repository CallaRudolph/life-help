import React from "react";

function complete() {
  console.log("complete clicked");
}

function CompleteTask(props) {
  return (
    <div>
      <button onClick={complete}>Do it</button>
    </div>
  );
}

export default CompleteTask;
