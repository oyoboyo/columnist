import { Link, useConfig } from "@columnist/core";

export default function Hero() {
  const config = useConfig();
  return (
    <header className="page-header">
      <nav className="header-hero navbar navbar-expand navbar-light bg-white mb-3 mb-md-5 border-bottom">
        <div className="container-fluid flex-column">
          {
            // Header login
            config.header.logIn ? (
              <Link
                className="header-login btn btn-lg btn-white"
                href={config.header.logIn.url}
              >
                {config.header.logIn.button}
              </Link>
            ) : null
          }
          <div className="row justify-content-center">
            {
              // Header logo
              config.header.logo ? (
                <div className="header-logo mt-4 mb-3">
                  <Link href="/">
                    <img
                      className="mt-1 img-fluid"
                      src={config.brand.logo}
                    />
                  </Link>
                </div>
              ) : null
            }
            {
              // Header name
              config.header.name ? (
                <h1 className="header-name h3 text-center">
                  <Link href="/">{config.brand.name}</Link>
                </h1>
              ) : null
            }
            {
              // Header tagline
              config.header.tagline ? (
                <div className="header-tagline lead text-center mb-3 text-muted">
                  {config.brand.tagline}
                </div>
              ) : null
            }
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
              {
                // Header call to action button
                config.header.cta ? (
                  <Link
                    className="header-cta btn btn-primary me-sm-2"
                    href={config.header.cta.url}
                  >
                    {config.header.cta.button}
                  </Link>
                ) : null
              }
              {
                // Header menu
                config.header.menu ? (
                  <ul className="header-menu navbar-nav d-flex mt-1 mt-sm-0 justify-content-center">
                    {config.header.menu.map(({ url, title }, index) => (
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
