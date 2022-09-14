// Import components
import { Column, Subscription } from "../components";
// Import config
import { site } from ".config";

// # Subscribe Page
export default function SubscribePage() {
	// Get subscriptions
	const subscriptions = [
		{
			name: "Free",
			key: "free",
			description:
				"Receive our free weekly newsletter and limited access to premium content.",
			signUp: {
				text: "Sign Up For Free",
				url: "",
			},
			price: 0,
		},
		{
			name: "Premium",
			key: "premium",
			description:
				"Get the benefits of subscribing plus unlimited access to premium content.",
			purchase: {
				text: "Upgrade To Premium",
				action: "",
			},
			cancel: {
				text: "Cancel",
				action: "",
			},
			price: 4.99,
		},
	];

	// Render subscribe page
	return (
		<>
			{
				// Render content
				<Column>
					<h1>Subscribe Today</h1>
					<p className="lead">
						Gain unlimited access to all the best +{site.name} + content.
					</p>
				</Column>
			}
			{
				// Render subscriptions
				subscriptions.map((subscription, index) => (
					<Column key={index}>
						<Subscription card content={subscription} />
					</Column>
				))
			}
			{
				// Render disclaimer
				<Column>
					<div>
						<span>By continuing, you agree to the </span>
						<a href="/privacy"> Privacy Policy.</a>
					</div>
				</Column>
			}
		</>
	);
}

export async function getStaticProps() {
	// Return page props
	return {
		props: {
			// Include page meta tags
			meta: {
				title: "404 Page Not Found",
				description:
					"Gain unlimited access to all the best " + site.name + " content.",
			},
		},
	};
}
