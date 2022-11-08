// Import core
import { Link } from "@columnist/core";
// Import config
import { header, site } from ".config";

// # Header bar component
export default function Bar() {
	// Render bar
	return (
		<header className="page-header">
			<nav className="header-bar navbar navbar-expand navbar-light bg-white p-md-4 mb-4 mb-md-5 border-bottom">
				<div className="container-fluid">
					<div className="d-flex w-100 align-content-start justify-content-between">
						<div className="d-flex flex-column flex-md-row">
							<div className="d-flex align-items-center">
								{
									// Header logo
									header.logo ? (
										<span className="header-logo me-2 me-md-4">
											<Link href="/">
												<img className="img-fluid" src={site.logo} />
											</Link>
										</span>
									) : null
								}
								{
									// Header name
									header.name ? (
										<div className="header-name align-items-center">
											<h1 className="name h5 me-3 mb-0">
												<Link href="/">{site.name}</Link>
											</h1>
										</div>
									) : null
								}
							</div>
							{
								// Header menu
								header.menu ? (
									<ul className="header-menu navbar-nav mt-2 mt-md-0 d-flex">
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
						<div>
							{
								// Header call to action button
								header.callToAction ? (
									<Link
										className="header-cta btn btn-primary"
										href={header.callToAction.url}
									>
										{header.callToAction.button}
									</Link>
								) : null
							}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
