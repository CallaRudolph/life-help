class Task {
  constructor(task, frequency) {
    this.task = task;
    this.frequency = frequency;
    this.timeCompleted = new Date();
  }
}

export default Task;
