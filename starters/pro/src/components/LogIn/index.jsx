// Import vendor modules
import { firebaseApp } from "firebase.config";
import { getAuth } from "firebase/auth";
import {
	useSignInWithGoogle,
	useSignInWithEmailAndPassword,
	useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
// Import Bootstrap
import Form from "react-bootstrap/Form";
// Import React modules
import { useState, useEffect } from "react";
// Import config
import { site } from ".config";

const auth = getAuth(firebaseApp);

function makeSignInErrorMessage(code) {
	let signInErrorMessage = "";
	switch (code) {
		case "auth/user-not-found":
			signInErrorMessage =
				"Sorry, we couldn't find an account with that email. Would you like to create one? Sign-up below or try again.";
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

// # Login form component
export default function LogInForm() {
	const [signInWithGoogle] = useSignInWithGoogle(auth);

	// Set state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signUp, setSignUp] = useState(false);
	const [validate, setValidate] = useState();

	// Set sign with email and password
	const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
		useSignInWithEmailAndPassword(auth);

	// Create error message
	let signInErrorMessage = makeSignInErrorMessage(signInError?.code);

	// Create user with email and password
	const [signUpWithEmailAndPassword, signUpUser, signUpLoading, signUpError] =
		useCreateUserWithEmailAndPassword(auth);

	// Handle form
	const signUpOrSignIn = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		// Check form is valid
		if (form.checkValidity() === true) {
			// Sign up or sign in
			signUp
				? signUpWithEmailAndPassword(email, password)
				: signInWithEmailAndPassword(email, password);
		}
	};

	useEffect(() => {
		if (signInError?.code === "auth/user-not-found") {
			setSignUp(true);
		}
	}, [signInError]);

	// Render login form
	return (
		<>
			{
				// Render page details
				<>
					<h1>Sign {signUp ? "up" : "in"}</h1>
					<p>
						Sign {signUp ? "up" : "in"} to enjoy more free articles from{" "}
						{site.name}
					</p>
				</>
			}
			{
				// Render buttons
				<div className="d-grid gap-2">
					<button
						onClick={() => signInWithGoogle()}
						className="btn btn-outline-secondary btn-lg"
						type="button"
					>
						Continue with Google
					</button>
					<hr />
				</div>
			}
			{
				// Render form
				<div className="d-grid gap-2">
					<>
						{
							// If user not logged in render login form
							!signInUser || !signUpUser ? (
								<>
									{
										// Render error if error
										signInError || signUpError ? (
											<div className="alert alert-danger" role="alert">
												{signInErrorMessage ? signInErrorMessage : null}
											</div>
										) : null
									}
									{
										// Render form
										<form
											className={validate ? "was-validated" : ""}
											onSubmit={(event) => {
												signUpOrSignIn(event);
											}}
										>
											<label htmlFor="emailInput" className="form-label small">
												Email
											</label>
											<div>
												<input
													type="email"
													className="form-control form-control-lg"
													id="emailInput"
													placeholder="Enter your email..."
													value={email}
													onChange={(event) => {
														setEmail(event.target.value);
														setValidate(true);
													}}
													required
												/>
												<div class="invalid-feedback">
													Please enter a valid email
												</div>
												<div class="valid-feedback">
													Thank you, that's a valid email
												</div>
											</div>
											<label
												htmlFor="passwordInput"
												className="mt-2 form-label small"
											>
												Password
											</label>

											<div>
												<input
													type="password"
													className="form-control form-control-lg"
													id="passwordInput"
													placeholder="Enter your password..."
													value={password}
													onChange={(event) => setPassword(event.target.value)}
													required
												/>
												<div class="invalid-feedback">
													Please enter a valid password
												</div>
												<div class="valid-feedback">
													Thank you, that's a valid password
												</div>
											</div>
											{
												// Render button
												<>
													<div className="d-grid gap-2 mt-3">
														<button
															className={
																"btn btn-lg " +
																(signUp ? " btn-primary" : "btn-dark") +
																(email === "" || password === ""
																	? " disabled"
																	: "")
															}
															type="submit"
															onSubmit={(event) => {
																signUpOrSignIn(event);
															}}
														>
															{signUp ? "Sign-up" : "Sign-in"} with email and
															password
														</button>
													</div>
												</>
											}
										</form>
									}
								</>
							) : null
						}
					</>

					{
						// Render policy
						<small>
							<span>
								By continuing, with third party login providers, or email you
								agree to the{" "}
							</span>
							<a href="/privacy"> Privacy Policy.</a>
						</small>
					}
					{
						// Render sign-in, sign-up navigation
						<small>
							{signUp ? (
								<>
									Already signed up?{" "}
									<a
										href="#"
										onClick={(event) => {
											event.preventDefault();
											setSignUp(false);
										}}
									>
										Sign in.
									</a>
								</>
							) : (
								<>
									Don't have an account?{" "}
									<a
										href="#"
										onClick={(event) => {
											event.preventDefault();
											setSignUp(true);
										}}
									>
										Sign up.
									</a>
								</>
							)}
						</small>
					}
				</div>
			}
		</>
	);
}
