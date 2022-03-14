// core
import { useConfig } from "@columnist/core";
// local defaults
import defaults from "../../config.defaults";

import Teaser from "./Teaser";
import Detail from "./Detail";

const Article = ({ content, style }) => {
  return style === "teaser" ? (
    <Teaser content={content} />
  ) : style === "detail" ? (
    <Detail content={content} />
  ) : null;
};

export default Article;
