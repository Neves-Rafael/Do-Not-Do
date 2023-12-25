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

  add(returnSearch) {
    const taskBody = returnSearch;

    this.entries = [...this.entries, taskBody];
    this.update();
    this.save();
  }

  delete(task) {
    this.entries = this.entries.filter((entry) => entry !== task);
    this.update();
    this.save();
  }
}

//DOM manipulation and events
export class TaskView extends TasksUpdate {
  constructor(root) {
    super(root);

    this.div = this.root.querySelector(".tasks-scroll");

    if (this.div) {
      this.update();
      this.onAdd();
    }
  }

  onAdd() {
    const buttonPopUp = this.root.querySelector(".add-task-popup");
    const confirmButton = this.root.querySelector(".add-task-confirm");

    buttonPopUp.addEventListener("click", () => {
      TaskInfo.infoInputTask();
    });

    confirmButton.addEventListener("click", () => {
      const returnSearch = TaskInfo.searchTask();
      this.add(returnSearch);
    });
  }

  update() {
    this.removeAllTasks();

    this.entries.forEach((task) => {
      const row = this.createDiv();
      if(!task ){
        this.delete(task);
        return
      }

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
      <button class="remove-task"><img src="src/assets/exit.svg" alt="" /></button
    `;
    return div;
  }

  removeAllTasks() {
    this.div.querySelectorAll(".task-list").forEach((task) => {
      task.remove();
    });
  }
}
