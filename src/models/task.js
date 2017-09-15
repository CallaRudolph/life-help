import Moment from "moment";

class Task {
  constructor(task, frequency) {
    this.task = task;
    this.frequency = frequency;
    this.timeCompleted = null;
  }
}

export default Task;
