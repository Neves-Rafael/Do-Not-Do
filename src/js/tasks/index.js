import { TaskView } from "./UpdateTasks.js";
import { TaskInfo } from "./TaskInfo.js";

export function tasks() {
  new TaskInfo();
  new TaskView(".app");
}
