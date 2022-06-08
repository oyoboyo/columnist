import Hero from "./Hero";
import Bar from "./Bar";

import { useTheme } from "@columnist/core";

const Header = ({ brand, config, style }) => {
  return !style || style === "bar" ? (
    // Header bar
    <Bar brand={brand} config={config} />
  ) : style === "hero" ? (
    // Header hero
    <Hero brand={brand} config={config} />
  ) : null;
};

export default Header;
