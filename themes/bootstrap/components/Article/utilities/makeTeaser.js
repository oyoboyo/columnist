// core
import { useConfig } from "@columnist/core";
import { calcTime, stringDate, truncate } from "@columnist/core";
// local defaults
import defaults from "../../../config.defaults";

const makeTeaser = (content) => {
  const config = useConfig();

  const teaser = config.article.teaser
    ? config.article.teaser
    : defaults.article.teaser;

  return (content = {
    ...content,
    truncated: teaser.limit ? truncate(content.text, teaser.limit) : null,
    readTime: teaser.readTime ? calcTime(content.text) : null,
    date: teaser.date ? stringDate(content.date, teaser.date) : null,
  });
};

export default makeTeaser;
