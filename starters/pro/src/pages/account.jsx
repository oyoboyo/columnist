// Import components
import { Column, LogIn, Account } from "../components";
// Import config
import { site } from ".config";
import { firebaseApp } from "../../firebase.config";
// Import hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

// # Account page
export default function AccountPage() {
	// Get user (to do)
	const [user, loading, error] = useAuthState(auth);
	// Render account page
	return (
		<>
			{
				// If user, render user account
				user ? (
					<Column style="default">
						<h1>Account</h1>
						<p>Manage your account details and subscription</p>
						<Account user={user} />
					</Column>
				) : (
					// If no user, render Login
					<Column style="default">
						<h1>Log in</h1>
						<p>Log in to enjoy more free articles from {site.name}</p>
						<LogIn user={user} />
					</Column>
				)
			}
		</>
	);
}

export async function getStaticProps() {
	// Return static props
	return {
		props: {
			// Include meta
			meta: {
				title: "Account & Login",
				description:
					"Enjoy free articles & more with your " + site.name + " account.",
			},
		},
	};
}
