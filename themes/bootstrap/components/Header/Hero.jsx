import { Link } from "@columnist/core";

export default function Hero({ config, brand }) {
  return (
    <header className="page-header">
      <nav className="header-hero navbar navbar-expand navbar-light bg-white mb-3 mb-md-5 border-bottom">
        <div className="container-fluid flex-column">
          {
            // Header login
            config.logIn ? (
              <Link
                className="header-login btn btn-lg btn-white"
                href={config.logIn.url}
              >
                {config.logIn.button}
              </Link>
            ) : null
          }
          <div className="row justify-content-center">
            {
              // Header logo
              config.logo ? (
                <div className="header-logo mt-4 mb-3">
                  <Link href="/">
                    <img className="mt-1 img-fluid" src={brand.logo} />
                  </Link>
                </div>
              ) : null
            }
            {
              // Header name
              config.name ? (
                <h1 className="header-name h3 text-center">
                  <Link href="/">{brand.name}</Link>
                </h1>
              ) : null
            }
            {
              // Header tagline
              config.tagline ? (
                <div className="header-tagline lead text-center mb-3 text-muted">
                  {brand.tagline}
                </div>
              ) : null
            }
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
              {
                // Header call to action button
                config.cta ? (
                  <Link
                    className="header-cta btn btn-primary me-sm-2"
                    href={config.cta.url}
                  >
                    {config.cta.button}
                  </Link>
                ) : null
              }
              {
                // Header menu
                config.menu ? (
                  <ul className="header-menu navbar-nav d-flex mt-1 mt-sm-0 justify-content-center">
                    {config.menu.map(({ url, title }, index) => (
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
