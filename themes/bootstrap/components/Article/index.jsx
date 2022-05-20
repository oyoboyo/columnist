// Local components
import Teaser from "./Teaser";
import Detail from "./Detail";

export default function Article({ content, style }) {
  return style === "teaser" ? (
    // Article teaser
    <Teaser content={content} />
  ) : style === "detail" || !style ? (
    // Article detail
    <Detail content={content} />
  ) : null;
}
