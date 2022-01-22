import Teaser from "./Teaser";
import Featured from "./Featured";
import Detail from "./Detail";

import makeIssueFromDocument from "./utilities/makeIssueFromDocument";

const Issue = ({ content, style }) => {
  const issue = makeIssueFromDocument(content);

  return style === "teaser" ? (
    <Teaser content={issue} />
  ) : style === "featured" ? (
    <Featured content={issue} />
  ) : style === "detail" ? (
    <Detail content={issue} />
  ) : null;
};

export default Issue;
