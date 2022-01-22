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
