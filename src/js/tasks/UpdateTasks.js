export class TaskView {
  taskList = [];
  add() {
    const addTask = document.querySelector(".add-task");

    if (addTask) {
      addTask.addEventListener("click", () => {
        const taskData = {
          name: "task 1",
        };

        this.updateTask(taskData);
        this.save();
      });
    }
  }

  updateTask(taskData) {
    this.taskList.push(taskData);

    const div = document.createElement("div");
    div.classList.add("task-list");

    div.innerHTML = `
            <h2>${taskData.name}</h2>
            <button class="remove-task">x</button>
        `;

    div.querySelector(".remove-task").addEventListener("click", () => {
      this.delete(div, taskData);
    });

    console.log(this.root);
    console.log(div);
    this.div.append(div);
  }

  delete(taskElement, taskData) {
    taskElement.remove();
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.taskList));
    console.log(JSON.parse(localStorage.getItem("tasks")));
  }

  load() {
    JSON.parse(localStorage.getItem("tasks"));
  }
}
