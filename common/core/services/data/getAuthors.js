import { readFileSync as readFile, existsSync as exists } from "fs";

export default function getAuthors(path) {
  // <--- change to generic "get data"
  if (exists(path)) {
    const authorsData = readFile(path);
    return JSON.parse(authorsData);
  } else {
    return null;
  }
}
