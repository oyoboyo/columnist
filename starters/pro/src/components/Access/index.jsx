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
// Import utilities
import { makeAlert } from "./makeAlert";

const auth = getAuth(firebaseApp);

// # Access component
// User sign-in, sign-up, and password reset component
export default function Access() {
	// Set form state
	const [formAction, setFormAction] = useState("Sign in");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alert, setAlert] = useState();
	const [validate, setValidate] = useState();
	const [loading, setLoading] = useState(false);
	// Social sign in
	const [signInWithGoogle] = useSignInWithGoogle(auth);

	// Handle form submission
	const handleSubmit = (event) => {
		// Prevent default
		event.preventDefault();
		// Begin loading
		setLoading(true);
		// Validate form
		const form = event.currentTarget;
		if (form.checkValidity() === true) {
			// Run form actions:
			// Sign in, sign up, or reset password
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
							setAlert(makeAlert(error.code));
							setLoading(false);
							setValidate(false);
							// If user not found
							if (error.code === "auth/user-not-found") {
								// Set form action to sign up
								setFormAction("Sign up");
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
							setAlert(makeAlert(error));
							setLoading(false);
							setValidate(false);
						});
					break;
				case "Reset password":
					// Reset password with email
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
							setAlert(makeAlert(error));
							setLoading(false);
							setValidate(false);
						});
					break;
			}
		}
	};

	// Reset validation and alert on form action change
	useEffect(() => {
		setValidate(false);
		setAlert(null);
	}, [formAction]);

	// Render access form
	return (
		<div className="access">
			{
				// Render page details
				<div className="access-details">
					<h1>{formAction}</h1>
					<p>
						{formAction}{" "}
						{formAction === "Reset password"
							? "to access "
							: "to enjoy more free articles from "}
						{site.name}
					</p>
				</div>
			}
			{
				// Render third party sign-in buttons
				formAction === "Sign in" || formAction === "Sign up" ? (
					<div className="sign-in-with-google d-grid gap-2">
						<button
							onClick={() => signInWithGoogle()}
							className="btn btn-outline-secondary btn-lg"
							type="button"
						>
							Continue with Google
						</button>
						<hr />
					</div>
				) : null
			}
			{
				// Render alert
				alert ? (
					<div
						className={"access-alert" + ("alert " + alert.type)}
						role="alert"
					>
						{alert.message}
					</div>
				) : null
			}
			{
				// Render form in wrapper
				<div className="access-form-wrapper d-grid gap-2">
					<form
						className={"access-form" + (validate ? "was-validated" : "")}
						onSubmit={(event) => {
							handleSubmit(event);
						}}
					>
						{
							// Render email input
							<div className="access-form-email-wrapper">
								<label className="form-label small" htmlFor="emailInput">
									Email
								</label>
								<input
									className="form-control form-control-lg"
									type="email"
									id="emailInput"
									placeholder="Enter your email..."
									value={email}
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
								<div className="access-form-password-wrapper">
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
										minLength={6}
										onChange={(event) => setPassword(event.target.value)}
										required
									/>
									<div className="invalid-feedback">
										Please enter a valid password
									</div>
									<div className="valid-feedback">
										Thank you, that's a valid password
									</div>
								</div>
							)
						}
						{
							// Render submit button
							<div className="access-form-submit d-grid gap-2 mt-3 mb-2">
								<button
									className={
										"btn btn-lg btn-dark" + (loading ? " disabled" : "")
									}
									type="submit"
								>
									{
										// Render spinner or form action
										loading ? (
											<div class="spinner-border text-light" role="status">
												<span class="visually-hidden">Loading...</span>
											</div>
										) : (
											<>{formAction}</>
										)
									}
								</button>
							</div>
						}
					</form>
					{
						// Render policy
						<div className="access-form-policy small">
							<span>
								By continuing with third party providers or email you agree to
								the{" "}
							</span>
							<a href="/privacy"> Privacy Policy.</a>
						</div>
					}
					{
						// Render access form secondary links
						<div className="access-form-links">
							{
								// Render password reset link
								formAction === "Reset password" ? null : (
									<div className="access-form-reset-link small">
										Forget your password?{" "}
										<a
											href="/#"
											onClick={(event) => {
												event.preventDefault();
												setFormAction("Reset password");
											}}
										>
											Reset.
										</a>
									</div>
								)
							}
							{
								// Render sign up link
								formAction === "Sign up" || formAction === "Reset password" ? (
									<div className="access-form-sign-up-link small mb-2">
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
								) : null
							}
							{
								// Render sign-up link
								formAction === "Sign in" || formAction === "Reset password" ? (
									<div className="access-form-sign-in-link small mb-2">
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
								) : null
							}
						</div>
					}
				</div>
			}
		</div>
	);
}
