// Import styles
import "src/styles/index.scss";
// Import components
import { Layout, Meta, Favicon } from "../components";
// Import Firebase
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);

// # App
function MyApp({ Component, pageProps }) {
	const [user, loading, error] = useAuthState(auth);

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
