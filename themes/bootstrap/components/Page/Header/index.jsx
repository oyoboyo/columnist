import Hero from "./Hero";
import Bar from "./Bar";

const Header = ({ style }) => {
  return !style || style === "bar" ? (
    <Bar />
  ) : style === "hero" ? (
    <Hero />
  ) : null;
};

export default Header;
