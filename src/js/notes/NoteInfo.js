export class NoteInfo {
  static searchNote() {
    const nameInput = document.querySelector(".input-note-name").value;
    const objectiveInput = document.querySelector(".input-note-date").value;
    const descriptionInput = document.querySelector(".input-note-description").value;
    
    const endpoint = {
      name: nameInput,
      objective: objectiveInput,
      description: descriptionInput,
    };
    this.infoInputNote();
    if (endpoint.name !== "") {
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
    const toggleElements = () => {
      noteToggleContent.classList.toggle("hidden");
      toggleContentInput.classList.toggle("hidden");
      bgToggleContent.classList.toggle("hidden");
    };
    returnToggle.addEventListener("click", toggleElements);
  
    returnToggle.removeEventListener("click", toggleElements);
  }
}
