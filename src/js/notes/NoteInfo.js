export class NoteInfo {
  static searchNote() {
    const nameInput = document.querySelector(".input-note-name").value;
    const dateInput = document.querySelector(".input-note-date").value;
    const textInput = document.querySelector(".input-note-description").value;
    
    const endpoint = {
      name: nameInput,
      date: "teste2",
      text: "teste3",
    };
    this.infoInputNote();
    console.log(endpoint.name);
    if (endpoint.name !== "") {
      console.log("have a value");
      return endpoint;
    }
  }

  static infoInputNote() {
    const toggleContentInput = document.querySelector(".info-note");
    const noteToggleContent = document.querySelector(".notes");
    const bgToggleContent = document.querySelector(".bg-cover-confirm-note");

    noteToggleContent.classList.toggle("hidden");
    toggleContentInput.classList.toggle("hidden");
    bgToggleContent.classList.toggle("hidden");

    const returnToggle = document.querySelector(".add-notes-confirm");
    console.log(returnToggle)
    const toggleElements = () => {
      noteToggleContent.classList.toggle("hidden");
      toggleContentInput.classList.toggle("hidden");
      bgToggleContent.classList.toggle("hidden");
    };
    returnToggle.addEventListener("click", toggleElements);
  
    returnToggle.removeEventListener("click", toggleElements);
  }
}
