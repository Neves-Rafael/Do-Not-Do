
export class TaskInfo {
  static search() {

    const nameInput = document.querySelector(".input-name").value;
    const dateInput = document.querySelector(".input-email").value;
    const textInput = document.querySelector(".input-description").value;
    const endpoint = {
      name: nameInput,
      date: "teste2",
      text: "teste3",
    };
    this.infoInput();
    console.log(endpoint.name);
    if (endpoint.name !== "") {
      console.log("have a value");
      return endpoint;
    }
  }

  static async infoInput() {
    const toggleContentInput = document.querySelector(".info-task");
    const taskToggleContent = document.querySelector(".tasks-container");
    const bgToggleContent = document.querySelector(".bg-cover-confirm");
  
    taskToggleContent.classList.toggle("hidden");
    toggleContentInput.classList.toggle("hidden");
    bgToggleContent.classList.toggle("hidden");
  
    const returnToggle = document.querySelector(".add-task-confirm");
    const toggleElements = () => {
      taskToggleContent.classList.toggle("hidden");
      toggleContentInput.classList.toggle("hidden");
      bgToggleContent.classList.toggle("hidden");
    };
    returnToggle.addEventListener("click", toggleElements);
  
    returnToggle.removeEventListener("click", toggleElements);
  }
}
