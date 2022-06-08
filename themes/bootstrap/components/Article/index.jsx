// Local components
import Teaser from "./Teaser";
import Detail from "./Detail";

export default function Article({ content, config, style, children }) {
  return style === "teaser" ? (
    // Article teaser
    <Teaser config={config.teaser} content={content} />
  ) : style === "detail" || !style ? (
    // Article detail
    <Detail config={config.detail} content={content}>
      {children}
    </Detail>
  ) : null;
}
