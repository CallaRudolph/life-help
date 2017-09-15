import React from "react";

function NewTaskForm(props) {

  function handleNewTask(event) {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleNewTask}>
        <textarea
          id="task"
          placeholder="What do you need to do?"/>
        <input
          type="text"
          id="date"
          placeholder="Frequency"/>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
