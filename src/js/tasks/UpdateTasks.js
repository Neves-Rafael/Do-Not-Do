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

  save(){
    localStorage.setItem("tasks", JSON.stringify(this.entries));
  }


  add(value){
    const taskExists = this.entries.find(entry => entry.login === value);

    const taskBody = TaskInfo.search();

    if(taskExists){
      console.log("Task already exists");
      return;
    }

    console.log(taskBody);
    this.entries = [...this.entries, taskBody];
    this.update();
    this.save();
  }

  delete(user){
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
    const addButton = this.root.querySelector(".add-task");
    addButton.addEventListener("click", () => {
      const value = prompt("Enter task");
      this.add(value);
    })
  }

  update() {
    this.removeAllTasks();
    this.entries.forEach((task) => {
      const row = this.createDiv();
      row.querySelector("h2").textContent = task.name;
      row.querySelector(".remove-task").onclick = () => {
        this.delete(task);
      }
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
