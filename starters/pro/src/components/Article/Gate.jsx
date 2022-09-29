// Import component
import LogInForm from "../LogIn";
// Import config
import { site } from ".config";

// # Article gate component
export default function Gate() {
	// Render gate
	return (
		<div className="article-gate pt-3">
			<div
				className={
					// Render pop-up class
					`${
						site.usePopUps ? "container-fluid fixed-bottom pb-3" : null
					} border-top bg-white pt-4`
				}
			>
				<div className="row justify-content-center">
					<div
						className={
							// Render pop-up class
							site.usePopUps ? "col-md-7 col-lg-6 col-xl-5" : "col-md-10"
						}
					>
						{
							// Display gate heading if heading in config
							<h2 className="gate-heading h3">
								Thank you for reading {site.name}
							</h2>
						}
						<div className="d-grid gap-2">
							{
								// Gate lead
								<p className="gate-lead lead text-muted mb-0">
									Create your free account or log in to continue reading this
									article.
								</p>
							}
							{
								// Gate log in form
								<LogInForm />
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}