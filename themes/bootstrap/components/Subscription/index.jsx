import Card from "./Card";
import Item from "./Item";

export default function Subscription({ content, style, current }) {
  return style === "card" ? (
    <Card content={content} current={current} />
  ) : style === "item" ? (
    <Item content={content} current={current} />
  ) : null;
}
