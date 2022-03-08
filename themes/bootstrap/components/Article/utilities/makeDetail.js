// core
import { useConfig } from "@columnist/core";
import { calcTime, stringDate } from "@columnist/core";
// local defaults
import defaults from "../../../config.defaults";

const makeDetail = (content) => {
  const config = useConfig();

  const detail = config.article.detail
    ? config.article.detail
    : defaults.article.detail;

  return (content = {
    ...content,
    readTime: detail.readTime ? calcTime(content.text) : null,
    date: detail.date ? stringDate(content.date, detail.date) : null,
  });
};

export default makeDetail;
