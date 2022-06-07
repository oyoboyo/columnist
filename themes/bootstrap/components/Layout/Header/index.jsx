import Hero from "./Hero";
import Bar from "./Bar";

const Header = ({ style }) => {
  return !style || style === "bar" ? (
    // Header bar
    <Bar />
  ) : style === "hero" ? (
    // Header hero
    <Hero />
  ) : null;
};

export default Header;
