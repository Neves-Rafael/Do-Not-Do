import { NoteInfo } from "./NoteInfo.js";
//Data manipulation
export class NotesUpdate {
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
    const noteBody = returnSearch;

    this.entries = [...this.entries, noteBody];
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
export class NoteView extends NotesUpdate {
  constructor(root) {
    super(root);

    this.div = this.root.querySelector(".notes-container");

    if (this.div) {
      this.update();
      this.onAdd();
    }
  }

  onAdd() {
    const buttonPopUp = this.root.querySelector(".add-notes-popup");
    const confirmButton = this.root.querySelector(".add-notes-confirm");

    buttonPopUp.addEventListener("click", () => {
      NoteInfo.infoInputNote();
    });

    confirmButton.addEventListener("click", () => {
      const returnSearch = NoteInfo.searchNote();
      this.add(returnSearch);
    });
  }

  update() {
    this.removeAllNotes();

    this.entries.forEach((note) => {
      const row = this.createDiv();
      if(!note ){
        this.delete(note);
        return
      }

      row.querySelector("h2").innerText = note.name;
      console.log("cliquei pra deletar task")
      row.querySelector(".remove-task").onclick = () => {
        this.delete(note);
      };
      this.div.append(row);
    });
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("notes-container");

    div.innerHTML = `
      <h2>task 2</h2>
      <button class="remove-task">x</button
    `;
    return div;
  }

  removeAllNotes() {
    this.div.querySelectorAll(".notes-container").forEach((note) => {
      note.remove();
    });
  }
}
