export function makeAlert(error) {
	let alert = { message: "", type: "" };
	switch (error.code) {
		case "auth/user-not-found":
			alert = {
				message:
					"Sorry, we couldn't find an account. Would you like to create one? Sign-up below or try again.",
				type: "alert-danger",
			};
			break;
		case "auth/invalid-email":
			alert = {
				message: "Invalid email. Please try again.",
				type: "alert-danger",
			};
			break;
		case "auth/wrong-password":
			alert = {
				message:
					"Wrong password. Please try again, or if you've forgotten your password, Reset below.",
				type: "alert-danger",
			};
			break;
		case "auth/email-already-in-use":
			alert = {
				message: "Email already in use. Please try again.",
				type: "alert-danger",
			};
			break;
		case "auth/weak-password":
			alert = {
				message: "Password must be at least 6 characters.",
				type: "alert-danger",
			};
			break;
		case "auth/email-already-in-use":
			alert = {
				message: "Email already in use. Do you need to reset? Reset below..",
				type: "alert-danger",
			};
			break;
		default:
			alert = { message: error.message, type: "alert-warning" };
			break;
	}
	return alert;
}
