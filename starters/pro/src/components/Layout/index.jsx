// Import components
import { Header, Footer } from "..";

// # Layout component
export default function Layout({ children, style }) {
	// Get style
	style = style ? style : { header: "bar" };
	// Render layout
	return (
		<>
			<Header style={style.header} />
			<main className="page-content container">
				<div className="row align-items justify-content-center">{children}</div>
			</main>
			<Footer />
		</>
	);
}
