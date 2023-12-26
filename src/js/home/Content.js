export class Content {
  constructor(root) {
    this.root = document.querySelector(root);
    this.getNotes();
    this.getTasks();
  }
  getTasks() {
    this.entriesTask = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("catch the tasks");
  }

  getNotes() {
    this.entriesNote = JSON.parse(localStorage.getItem("notes")) || [];
    console.log("catch the notes");
  }
}

export class HomeView extends Content {
  constructor(root) {
    super(root);

    this.noteContent = this.root.querySelector(".home-top-section");
    this.taskContent = this.root.querySelector(".home-bottom-section");

    this.updateNote();
    this.updateTask();
  }

  updateNote() {
    this.removeAllContent();
    this.entriesNote.forEach((note) => {
      const rowNote = this.createDivNote();
      rowNote.querySelector("h2").innerText = note.name;

      console.log(note.description)
      note.description
        ? (rowNote.querySelector(".note-description").innerText = note.description)
        : (rowNote.querySelector(".note-description").innerText = "");

      this.noteContent.append(rowNote);
    });
  }

  createDivNote() {
    const div = document.createElement("div");
    div.classList.add("home-top-section-note");

    div.innerHTML = `
        <h2>Book for read</h2>
        <p class="note-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        `;
    return div;
  }

  updateTask() {
    this.entriesTask.forEach((task) => {
      const rowTask = this.createDivTask();
      rowTask.querySelector("h2").innerText = task.name;

      task.description
        ? (rowTask.querySelector(".task-description").innerText = task.description)
        : (rowTask.querySelector(".task-description").innerText = "");

        task.objective
        ? (rowTask.querySelector(".task-objective").innerText = task.objective)
        : (rowTask.querySelector(".task-objective").innerText = "");

      this.taskContent.append(rowTask);
    });
  }

  createDivTask() {
    const div = document.createElement("div");
    div.classList.add("home-bottom-section-note");

    div.innerHTML = `
    <h2>Book for read</h2>
    <p class="task-description">
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s.
    </p>
    <p class="task-objective"></p>
    `;
    return div;
  }

  removeAllContent() {
    this.noteContent
      .querySelectorAll(".home-top-section-note")
      .forEach((note) => {
        note.remove();
      });

    this.taskContent
      .querySelectorAll(".home-bottom-section-note")
      .forEach((task) => {
        task.remove();
      });
  }
}
