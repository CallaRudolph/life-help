import Moment from "moment";

class Task {
  constructor(task, frequency) {
    this.task = task;
    this.frequency = frequency;
    this.timeComplete = new Moment();
    this.timeSinceCompleted = this.setTimeSinceCompleted();
  }
  
  setTimeSinceCompleted() {
    return this.timeComplete.fromNow(true);
  }
}


export default Task;
