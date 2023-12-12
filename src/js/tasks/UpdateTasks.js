export class Task {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}

export class TaskView extends Task {
  constructor(root) {
    super(root);
  }

  async add() {
    this.div = document.querySelector(".container-task");
    console.log(this.div);
    const addTask = document.querySelector(".add-task");
    if (addTask) {
      console.log(document.querySelector(".add-task"));

      addTask.addEventListener("click", () => {
        console.log("add task");
        const taskElement = this.createTask();
        console.log(taskElement);
        this.div.append(taskElement);
      });
    }
  }

  createTask() {
    const div = document.createElement("div");
    div.classList.add("task-list");
    console.log("create task");

    div.innerHTML = `
            <h2>task 1</h2>
            <button>x</button>
        `;

    return div;
  }
}
