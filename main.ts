import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Our manager booked a meeting about too many meetings, then sent the invite reply-all — to the meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
