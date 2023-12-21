import { TaskView } from "./UpdateTasks.js";
import { TaskInfo } from "./TaskInfo.js";
import { TasksUpdate } from "./UpdateTasks.js";
new TasksUpdate(".app");

export function tasks() {
    const taskInfo = new TaskInfo();
    const taskView = new TaskView(".app");
}