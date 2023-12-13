import { TaskInfo } from "./TaskInfo.js";
//Data manipulation
export class Tasks {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("tasks")) || [];
    // localStorage.clear();
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.entries));
  }

  add() {
    const taskBody = TaskInfo.search();
    const taskExists = this.entries.find((entry) => entry.name === taskBody.name);


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
export class TaskView extends Tasks {
  constructor(root) {
    super(root);

    this.div = this.root.querySelector(".container-task");
    this.update();
    this.onAdd();
  }

  onAdd() {
    const searchButton = this.root.querySelector(".add-task");
    const addButton = this.root.querySelector(".confirm");
    searchButton.addEventListener("click", () => {
      TaskInfo.search();
    });
    addButton.addEventListener("click", () => {
      this.add();
    })
  }

  update() {
    this.removeAllTasks();
    this.entries.forEach((task) => {
      const row = this.createDiv();
      row.querySelector("h2").innerText = task.name;

      row.querySelector(".remove-task").onclick = () => {
        this.delete(task);
      };
      this.div.append(row);
    });
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("task-list");

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
