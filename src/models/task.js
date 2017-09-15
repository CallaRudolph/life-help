import Moment from "moment";

class Task {
  constructor(task, frequency) {
    this.task = task;
    this.frequency = frequency;
    this.timeComplete = new Moment();
    this.timeSinceCompleted = "a few seconds";
  }

  setTimeSinceCompleted() {
    this.timeSinceCompleted =  this.timeComplete.fromNow(true);
  }
}


export default Task;
