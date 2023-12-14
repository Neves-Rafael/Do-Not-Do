
export class TaskInfo {
  static search() {
    this.infoInput();

    const nameInput = document.querySelector(".input-name").value;
    const dateInput = document.querySelector(".input-name").value;
    const textInput = document.querySelector(".input-name").value;
    const endpoint = {
      name: nameInput,
      date: dateInput,
      text: textInput,
    };
    console.log(endpoint.name);
    if (endpoint.name !== "") {
      console.log("have a value");
      return endpoint;
    }
  }

  static async infoInput() {
    const infoTask = document.querySelector(".info-task");
    const bgTemp = document.querySelector(".bg-temp");
    infoTask.classList.remove("hidden");
    bgTemp.classList.remove("hidden");

    const confirmClickHandler = () => {
      console.log("click");

      infoTask.classList.add("hidden");
      bgTemp.classList.add("hidden");
      document
        .querySelector(".confirm")
        .removeEventListener("click", confirmClickHandler);
    };

    document
      .querySelector(".confirm")
      .addEventListener("click", confirmClickHandler);
  }
}
