import { NoteInfo } from "./NoteInfo.js";
//Data manipulation
export class NotesUpdate {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("notes")) || [];

  }

  save() {
    localStorage.setItem("notes", JSON.stringify(this.entries));
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
      row.querySelector(".note-description").innerText = note.description;
      row.querySelector(".objective").innerText = note.objective;
      row.querySelector(".remove-notes").onclick = () => {
        this.delete(note);
      };
      this.div.append(row);
    });
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("note-list");

    div.innerHTML = `
      <h2>task 2</h2>
      <p class="note-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, in corrupti quis cumque est incidunt deleniti dignissimos nemo ipsa minima id consequuntur quo animi non, quibusdam nobis impedit consequatur similique!</p>
      <p class="objective">Best</p>
      <button class="remove-notes"><img src="src/assets/exit.svg" alt="" /></button
    `;
    return div;
  }

  removeAllNotes() {
    this.div.querySelectorAll(".note-list").forEach((note) => {
      note.remove();
    });
  }
}
