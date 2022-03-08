import Teaser from "./Teaser";
import Featured from "./Featured";
import ListItem from "./ListItem";
import Detail from "./Detail";

import makeFeatureFromDocument from "./utilities/makeFeatureFromDocument";

/**
 * Feature component
 */

const Feature = ({ content, style }) => {
  const feature = makeFeatureFromDocument(content);

  return style === "teaser" ? (
    <Teaser content={feature} />
  ) : style === "featured" ? (
    <Featured content={feature} />
  ) : style === "listItem" ? (
    <ListItem content={feature} />
  ) : style === "detail" ? (
    <Detail content={feature} />
  ) : null;
};

export default Feature;
