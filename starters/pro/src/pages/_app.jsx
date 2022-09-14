// Import styles
import "src/styles/index.scss";
// Import components
import { Layout, Meta, Favicon } from "../components";
// # App
function MyApp({ Component, pageProps }) {
	// Render app
	return (
		// Render layout with page style
		<Layout style={pageProps.style}>
			{
				// Render head with meta tags and favicon
				<>
					<Meta content={pageProps.meta} />
					<Favicon />
				</>
			}
			{
				// Render page children
				<Component {...pageProps} />
			}
		</Layout>
	);
}

export default MyApp;
