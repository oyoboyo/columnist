// Import vendor modules
import { firebaseApp } from "firebase.config";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// Import React modules
import { useState, useEffect } from "react";
// Import config
import { site } from ".config";

const auth = getAuth(firebaseApp);

function makeErrorMessage(code) {
	let signInErrorMessage = { message: "", type: "" };
	switch (code) {
		case "auth/user-not-found":
			signInErrorMessage = {
				message:
					"Sorry, we couldn't find an account. Would you like to create one? Sign-up below or try again.",
				type: "alert-danger",
			};
			break;
		case "auth/invalid-email":
			signInErrorMessage = {
				message: "Invalid email. Please try again.",
				type: "alert-danger",
			};
			break;
		case "auth/wrong-password":
			signInErrorMessage = {
				message:
					"Wrong password. Please try again, or if you've forgotten your password, Reset below.",
				type: "alert-danger",
			};
			break;
		default:
			signInErrorMessage = { message: "Unknown error", type: "alert-danger" };
			break;
	}
	return signInErrorMessage;
}

// # Login form component
export default function LogInForm() {
	// Set state
	const [user, setUser] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formAction, setFormAction] = useState("Sign in");
	const [validate, setValidate] = useState();
	const [alert, setAlert] = useState();
	const [loading, setLoading] = useState(false);
	// Social sign in
	const [signInWithGoogle] = useSignInWithGoogle(auth);

	// Handle form submission
	const handleSubmit = (event) => {
		setLoading(true);
		// Prevent default
		event.preventDefault();
		// Validate form
		const form = event.currentTarget;
		if (form.checkValidity() === true) {
			// Sign in, sign up or reset password
			switch (formAction) {
				case "Sign in":
					// Sign in user with email and password
					signInWithEmailAndPassword(auth, email, password)
						.then((userCredential) => {
							// Set user
							setUser(userCredential.user);
							setLoading(false);
						})
						.catch((error) => {
							// Set alert to error message
							setAlert(makeErrorMessage(error.code));
							// If user not found
							if (error.code === "auth/user-not-found") {
								// Set form action to sign up
								setFormAction("Sign up");
								setLoading(false);
							}
						});
					break;
				case "Sign up":
					// Create user with email and password
					createUserWithEmailAndPassword(auth, email, password)
						.then((userCredential) => {
							// Set user
							setUser(userCredential.user);
							setLoading(false);
						})
						.catch((error) => {
							// Set alert to error message
							setAlert(makeErrorMessage(error.code));
							setLoading(false);
						});
					break;
				// Reset password
				case "Reset password":
					sendPasswordResetEmail(auth, email)
						.then(() => {
							setAlert({
								message: "Password reset email sent.",
								type: "alert-success",
							});
							setLoading(false);
						})
						.catch((error) => {
							// Set alert to error message
							setAlert(makeErrorMessage(error.code));
							setLoading(false);
						});
					break;
			}
		}
	};

	// Render login form
	return (
		<>
			{
				// Render page details
				<>
					<h1>{formAction}</h1>
					<p>
						{formAction}{" "}
						{formAction === "Reset password"
							? "to access "
							: "to enjoy more free articles from "}
						{site.name}
					</p>
				</>
			}
			{formAction === "Sign in" || formAction === "Sign up" ? (
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
			) : null}
			{
				// Render form
				<div className="d-grid gap-2">
					<>
						{
							// If user not logged in render login form
							<>
								{
									// Render error if error
									alert ? (
										<div className={"alert " + alert.type} role="alert">
											{alert.message}
										</div>
									) : null
								}
								{
									// Render form
									<form
										className={validate ? "was-validated" : ""}
										onSubmit={(event) => {
											handleSubmit(event);
										}}
									>
										{
											// Render email input
											<div>
												<label
													htmlFor="emailInput"
													className="form-label small"
												>
													Email
												</label>
												<input
													type="email"
													value={email}
													id="emailInput"
													className="form-control form-control-lg"
													placeholder="Enter your email..."
													onChange={(event) => {
														setEmail(event.target.value);
														setValidate(true);
													}}
													required
												/>
												<div className="invalid-feedback">
													Please enter a valid email
												</div>
												<div className="valid-feedback">
													Thank you, that's a valid email
												</div>
											</div>
										}
										{
											// Render password input
											formAction === "Reset password" ? null : (
												<div>
													<label
														htmlFor="passwordInput"
														className="mt-2 form-label small"
													>
														Password
													</label>
													<input
														type="password"
														value={password}
														id="passwordInput"
														className="form-control form-control-lg"
														placeholder="Enter your password..."
														onChange={(event) =>
															setPassword(event.target.value)
														}
														required
													/>
													<div class="invalid-feedback">
														Please enter a valid password
													</div>
													<div class="valid-feedback">
														Thank you, that's a valid password
													</div>
												</div>
											)
										}
										{
											// Render submit
											<>
												<div className="d-grid gap-2 mt-3">
													<button
														className={
															"btn btn-lg btn-dark" +
															(loading ? " disabled" : "")
														}
														type="submit"
													>
														{loading ? (
															<div
																class="spinner-border text-light"
																role="status"
															>
																<span class="visually-hidden">Loading...</span>
															</div>
														) : (
															<>{formAction}</>
														)}
													</button>
												</div>
												{
													// Reset password button
													formAction === "Reset password" ? null : (
														<a
															className="small"
															href="/#"
															onClick={(event) => {
																event.preventDefault();
																setFormAction("Reset password");
															}}
														>
															Forget your password?
														</a>
													)
												}
											</>
										}
									</form>
								}
							</>
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
						<div className="">
							{formAction === "Sign up" || formAction === "Reset password" ? (
								<div className="small mb-2">
									Already signed up?{" "}
									<a
										href="#"
										onClick={(event) => {
											event.preventDefault();
											setFormAction("Sign in");
										}}
									>
										Sign in.
									</a>
								</div>
							) : null}
							{formAction === "Sign in" || formAction === "Reset password" ? (
								// Render sign-up link
								<div className="small mb-2">
									Don't have an account?{" "}
									<a
										href="#"
										onClick={(event) => {
											event.preventDefault();
											setFormAction("Sign up");
										}}
									>
										Sign up.
									</a>
								</div>
							) : null}
						</div>
					}
				</div>
			}
		</>
	);
}
