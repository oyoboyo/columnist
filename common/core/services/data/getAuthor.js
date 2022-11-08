import getAuthors from "./getAuthors";

export default function getAuthor(key) {
  // Get authors from expected path
  const authors = getAuthors(".data/authors.json");
  // Return author as object from authors or otherwise
  if (authors)
    if (authors[key]) return authors[key];
    else return { name: key };
  else return { name: key };
}
