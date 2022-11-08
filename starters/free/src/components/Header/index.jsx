import Hero from "./Hero";
import Bar from "./Bar";

// # Header component
const Header = ({ style }) => {
	// Render header as bar or hero
	return style === "bar" ? <Bar /> : style === "hero" ? <Hero /> : null;
};

export default Header;
