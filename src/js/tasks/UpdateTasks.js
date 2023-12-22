import { TaskInfo } from "./TaskInfo.js";
//Data manipulation
export class TasksUpdate {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("tasks")) || [];

    // this.entries = [{
    //   name: "task 1",
    //   date: "2020-01-01",
    // },
    // {
    //   name: "task 3",
    //   date: "2020-01-02",
    // }]
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.entries));
  }

  add(returnSearch) {
    console.log(this.entries);
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
      TaskInfo.infoInput();
    });

    confirmButton.addEventListener("click", () => {
      console.log("confirm");
      const returnSearch = TaskInfo.search();
      this.add(returnSearch);
    });
  }

  update() {
    this.removeAllTasks();
    console.log(this.entries)
    this.entries.forEach((task) => {
      const row = this.createDiv();
      if(task === undefined || null){
        this.delete(task);
        return
      }

      console.log(task);
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
