import { sortByDate } from "./sorts";
import { filterArticles, filterDrafts } from "./filters";

export const all = {
  limit: 10,
  truncation: 220,
  sorts: [sortByDate],
  filters: [filterArticles, filterDrafts],
};

export default all;
