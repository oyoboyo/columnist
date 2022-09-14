// # Login form component
export default function LogInForm() {
	// Render login form
	return (
		<div className="d-grid gap-2">
			{
				// Render inputs
				<div>
					<label htmlFor="formGroupExampleInput" className="form-label small">
						Log in using email
					</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Email address"
					/>
				</div>
			}

			{
				// Render buttons
				<>
					<button class="btn btn-dark" type="button">
						Continue with email
					</button>
					<hr className="mt-2 mb-2" />
					<button className="btn btn-outline-dark" type="button">
						Continue with Facebook
					</button>
					<button className="btn btn-outline-dark" type="button">
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
