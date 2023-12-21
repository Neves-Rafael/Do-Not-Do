import { TaskInfo } from "./TaskInfo.js";
//Data manipulation
export class TasksUpdate {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.entries));
  }

  add() {
    console.log(this.entries)
    const taskBody = TaskInfo.search();
    const taskExists = this.entries.find(
      (entry) => entry.name === taskBody.name
    );

    if (taskExists) {
      console.log("Task already exists");
      return;
    }

    console.log(taskBody);
    this.entries = [...this.entries, taskBody];
    this.update();
    this.save();
  }

  delete(user) {
    this.entries = this.entries.filter((entry) => entry !== user);
    this.update();
    this.save();
  }
}

//DOM manipulation and events
export class TaskView extends TasksUpdate {
  constructor(root) {
    super(root);

    console.log(this.root);
    this.div = this.root.querySelector(".tasks-scroll");

    if (this.div) {
      this.update();
      this.onAdd();
    }
  }

  onAdd() {
    const confirmButton = this.root.querySelector(".add-task-popup");

    confirmButton.addEventListener("click", () => {
      console.log("click");
      TaskInfo.search();
      this.add();
    });
  }

  update() {
    this.removeAllTasks();
    console.log(this.entries)
    this.entries.forEach((task) => {
      const row = this.createDiv();
      console.log(row)
      console.log(task)
      row.querySelector("h2").innerText = task.name;

      row.querySelector(".remove-task").onclick = () => {
        this.delete(task);
      };
      this.div.append(row);
    });
  }

  createDiv() {
    const div = document.createElement("div");

    div.innerHTML = `
      <h2>task 2</h2>
      <button class="remove-task">x</button
    `;
    return div;
  }

  removeAllTasks() {
    this.div.querySelectorAll(".task-list").forEach((task) => {
      task.remove();
    });
  }
}
