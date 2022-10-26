// Import firebase
import { firebaseApp } from "firebase.config";
import {
	useSignInWithGoogle,
	useSignInWithEmailAndPassword,
	useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(firebaseApp);

function makeSignInErrorMessage(code) {
	let signInErrorMessage = "";
	switch (code) {
		case "auth/user-not-found":
			signInErrorMessage =
				"Sorry, we couldn't find an account with that email. Would you like to create one? Sign-up below.";
			break;
		case "auth/invalid-email":
			signInErrorMessage = "Invalid email. Please try again.";
			break;
		case "auth/wrong-password":
			signInErrorMessage =
				"Wrong password. Please try again, or if you've forgotten your password, click the link below.";
			break;
		default:
			signInErrorMessage = "Unknown error";
			break;
	}
	return signInErrorMessage;
}

function EmailPasswordForm() {
	// Set state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Set sign with email and password
	const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
		useSignInWithEmailAndPassword(auth);

	// Create error message
	let signInErrorMessage = makeSignInErrorMessage(signInError?.code);

	// Create user with email and password
	const [signUpWithEmailAndPassword, signUpUser, signUpLoading, signUpError] =
		useCreateUserWithEmailAndPassword(auth);

	let signUp = signInError?.code === "auth/user-not-found" ? true : false;

	// Form handlers
	const signUpOrSignIn = (event) => {
		event.preventDefault();
		signUp
			? signUpWithEmailAndPassword(email, password)
			: signInWithEmailAndPassword(email, password);
	};

	return (
		<>
			{!signInUser || !signUpUser ? (
				<>
					{
						// Render error if error
						signInError || signUpError ? (
							<div className="alert alert-danger" role="alert">
								{signInErrorMessage ? signInErrorMessage : null}
							</div>
						) : null
					}
					{signInLoading || signUpLoading ? (
						<div className="spinner-border" role="status"></div>
					) : (
						// Render form
						<form
							onSubmit={(event) => {
								signUpOrSignIn(event);
							}}
						>
							<label htmlFor="emailInput" className="form-label small">
								Log in using email
							</label>
							<input
								type="email"
								className="form-control form-control-lg"
								id="emailInput"
								placeholder="Email address"
								onChange={(event) => setEmail(event.target.value)}
							/>
							<label htmlFor="passwordInput" className="mt-2 form-label small">
								Password
							</label>
							<input
								type="password"
								className="form-control form-control-lg mb-3"
								id="passwordInput"
								placeholder="Password"
								onChange={(event) => setPassword(event.target.value)}
							/>

							{
								// Render sign up button if sign up
								<div className="d-grid gap-2">
									<button
										className={
											email === "" || password === ""
												? "btn btn-dark disabled btn-lg"
												: signUp
												? "btn btn-primary btn-lg"
												: "btn btn-dark btn-lg"
										}
										type="submit"
										onSubmit={(event) => {
											signUpOrSignIn(event);
										}}
									>
										{signUp ? "Sign-up" : "Sign-in"} with email and password
									</button>
								</div>
							}
						</form>
					)}
				</>
			) : null}
		</>
	);
}

// # Login form component
export default function LogInForm() {
	const [signInWithGoogle] = useSignInWithGoogle(auth);

	// Render login form
	return (
		<div className="d-grid gap-2">
			<EmailPasswordForm />

			{
				// Render buttons
				<>
					<button
						onClick={() => signInWithGoogle()}
						className="btn btn-outline-dark btn-lg"
						type="button"
					>
						Continue with Google
					</button>
					<hr className="mt-2 mb-2" />
				</>
			}

			{
				// Render policy
				<small>
					<span>By continuing, you agree to the </span>
					<a href="/privacy"> Privacy Policy.</a>
				</small>
			}
		</div>
	);
}
