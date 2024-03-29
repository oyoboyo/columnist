// import core
import { Link } from "@columnist/core";
// Import config
import { header, site } from ".config";

// # Header her component
export default function Hero() {
	// Render hero
	return (
		<header className="page-header">
			<nav className="header-hero navbar navbar-expand navbar-light bg-white mb-3 mb-md-5 border-bottom">
				<div className="container-fluid flex-column">
					{
						// Header login
						header.logIn ? (
							<Link
								className="header-login btn btn-lg btn-white"
								href={header.logIn.url}
							>
								{header.logIn.button}
							</Link>
						) : null
					}
					<div className="row justify-content-center">
						{
							// Header logo
							header.logo ? (
								<div className="header-logo mt-4 mb-3">
									<Link href="/">
										<img className="mt-1 img-fluid" src={site.logo} />
									</Link>
								</div>
							) : null
						}
						{
							// Header name
							header.name ? (
								<h1 className="header-name h3 text-center">
									<Link href="/">{site.name}</Link>
								</h1>
							) : null
						}
						{
							// Header tagline
							header.tagline ? (
								<div className="header-tagline lead text-center mb-3 text-muted">
									{site.tagline}
								</div>
							) : null
						}
						<div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
							{
								// Header call to action button
								header.callToAction ? (
									<Link
										className="header-cta btn btn-primary me-sm-2"
										href={header.callToAction.url}
									>
										{header.callToAction.button}
									</Link>
								) : null
							}
							{
								// Header menu
								header.menu ? (
									<ul className="header-menu navbar-nav d-flex mt-1 mt-sm-0 justify-content-center">
										{header.menu.map(({ url, title }, index) => (
											<li className="nav-item" key={index}>
												<Link className="nav-link" href={url}>
													{title}
												</Link>
											</li>
										))}
									</ul>
								) : null
							}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
