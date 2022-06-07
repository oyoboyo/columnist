import { sortByDate } from "./sorts";
import { filterArticles, filterDrafts } from "./filters";

export const home = {
  html: false,
  listLimit: 10,
  maxCharacters: 220,
  sorts: [sortByDate],
  filters: [filterArticles, filterDrafts],
};

export default home;
