import Big from "./Big";
import Small from "./Small";

export default function Subscription({ content, style, current }) {
  return style === "big" ? (
    <Big content={content} current={current} />
  ) : style === "small" ? (
    <Small content={content} current={current} />
  ) : null;
}
