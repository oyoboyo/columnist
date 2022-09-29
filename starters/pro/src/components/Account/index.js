// Import components
import Subscription from "../Subscription";
import Item from "./Item";

// # Account component
export default function Account({ user }) {
	console.log(user);

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

	// Get account information
	const account = {
		items: [
			{
				label: "Name",
				text: user.displayName,
				button: {
					text: "Change",
				},
			},
			{
				label: "Email",
				text: user.email,
				button: {
					text: "Change",
				},
			},
			{
				label: "Password",
				text: "********",
				button: {
					text: "Change",
				},
			},

			{
				label: "Connected accounts",
				text: "Google, Apple",
				button: {
					text: "Manage",
				},
			},
		],
	};

	// Get current subscription
	const current = "free";

	// Return account
	return (
		<>
			{
				// Render profile
				<div className="account-profile mb-4">
					<h2>Profile</h2>
					{
						// Map account items
						account.items.map((item, index) => (
							<Item key={index} content={item} />
						))
					}
				</div>
			}
			{
				// Render subscriptions
			}
			<div className="account-subscription">
				<h2>Subscription</h2>
				<div className="small text-muted">Current</div>

				{
					// Filter current subscription
					subscriptions
						.filter((subscription) => subscription.key === current)
						.map((subscription) => (
							<Subscription
								item
								key={subscription.key}
								content={subscription}
								current={true}
							/>
						))
				}
				<div className="small text-muted">Options</div>
				{
					// Filter other options
					subscriptions
						.filter((subscription) => subscription.key !== current)
						.map((subscription) => (
							<Subscription
								item
								key={subscription.key}
								content={subscription}
								current={false}
							/>
						))
				}
				{
					// Render delete
					<>
						<div className="mb-2 small">
							No longer interested in the benefits of subscription?
						</div>
						<div class="d-grid gap-2">
							<button className="btn btn-dark">Delete account</button>
						</div>
					</>
				}

				{/* <div className="alert alert-danger">Warning. All account data will be deleted.</div>*/}
			</div>
		</>
	);
}
