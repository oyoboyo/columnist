// Local components
import Teaser from "./Teaser";
import Detail from "./Detail";

export default function Article({ content, teaser, detail }) {
  return teaser ? (
    // Render teaser
    <Teaser content={content} />
  ) : detail ? (
    // Render detail
    <Detail content={content} />
  ) : null;
}
