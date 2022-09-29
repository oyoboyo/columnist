// # Card component for Subscription
export default function Card({ content }) {
	// Render card
	return (
		<div className="card shadow mb-3">
			<div className="card-body">
				{
					// card info
					<>
						<h2 className="h5 sans-serif fw-bold">{content.name}</h2>
						<div className="mb-3">{content.description}</div>
						<div className="h5 mb-3">${content.price} monthly</div>
					</>
				}
				{
					// Card sign button
					content.signUp ? (
						<div class="d-grid gap-2">
							<a href={content.signUp.url} className="btn btn-primary">
								{content.signUp.text}
							</a>
						</div>
					) : null
				}
				{
					// Card purchase button
					content.purchase ? (
						<div class="d-grid gap-2">
							<button
								onClick={content.purchase.action}
								className="btn btn-primary"
							>
								{content.purchase.text}
							</button>
						</div>
					) : null
				}
			</div>
		</div>
	);
}