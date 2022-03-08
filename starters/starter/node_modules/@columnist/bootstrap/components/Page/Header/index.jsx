import Hero from "./Hero";
import Bar from "./Bar";

/**
 * Header component
 * Global navigation component
 */

const Header = ({ brand, config, style }) => {
  return !style || style === "bar" ? (
    <Bar brand={brand} config={config} />
  ) : style === "hero" ? (
    <Hero brand={brand} config={config} />
  ) : null;
};

export default Header;
