import { NoteView } from "./UpdateNotes.js";
import { NoteInfo } from "./NoteInfo.js";
export function notes() {
    new NoteInfo();
    new NoteView(".app");
}