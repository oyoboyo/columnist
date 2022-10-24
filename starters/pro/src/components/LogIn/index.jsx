// Import firebase
import { firebaseApp } from "firebase.config";
import {
	useAuthState,
	useSignInWithGoogle,
	useSignInWithEmailAndPassword,
	useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(firebaseApp);

function EmailPasswordForm() {
	// Set state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let signIn = email === "" || password === "";
	let signUp = false;

	const [user, loading, error] = useAuthState(auth);
	console.log(error);

	// Authenticate with email and password
	const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
		useSignInWithEmailAndPassword(auth);

	// Create error message
	let signInErrorMessage = "";

	if (signInError) {
		switch (signInError.code) {
			case "auth/user-not-found":
				signInErrorMessage =
					"Sorry, we couldn't find an account with that email. Would you like to create one? Click below.";
				signIn = false;
				signUp = true;
				break;
			case "auth/invalid-email":
				signInErrorMessage = "Invalid email";
				break;
			case "auth/wrong-password":
				signInErrorMessage = "Wrong password";
				break;
			default:
				signInErrorMessage = "Unknown error";
				break;
		}
	}

	// Create user with email and password

	const [
		createUserWithEmailAndPassword,
		signUpUser,
		signUpLoading,
		signUpError,
	] = useCreateUserWithEmailAndPassword(auth);

	return (
		<>
			{
				// No user? render form
				!user ? (
					<>
						{
							// Render error if error
							signInError ? (
								<div className="alert alert-warning" role="alert">
									{signInErrorMessage}
								</div>
							) : null
						}
						<form>
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
						</form>

						{signUp ? (
							<button
								className={"btn btn-primary btn-lg"}
								type="button"
								onClick={() => {
									signInWithEmailAndPassword(email, password);
								}}
							>
								Sign-up with email and password
							</button>
						) : (
							<button
								className={
									signIn
										? "btn btn-dark disabled btn-lg"
										: "btn btn-dark  btn-lg"
								}
								type="button"
								onClick={() => {
									signInWithEmailAndPassword(email, password);
								}}
							>
								Sign in with email and password
							</button>
						)}
					</>
				) : null
			}
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
