// Core
import { Link, useConfig } from "@columnist/core";

export default function Bar() {
  const config = useConfig();
  return (
    <header className="page-header">
      <nav className="header-bar navbar navbar-expand navbar-light bg-white p-md-4 mb-4 mb-md-5 border-bottom">
        <div className="container-fluid pe-0">
          <div className="d-flex w-100 align-content-start justify-content-between">
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex align-items-center">
                {
                  // Header logo
                  config.header.logo ? (
                    <span className="header-logo me-2 me-md-4">
                      <Link href="/">
                        <img
                          className="img-fluid"
                          src={config.brand.logo}
                        />
                      </Link>
                    </span>
                  ) : null
                }
                {
                  // Header name
                  config.header.name ? (
                    <div className="header-name align-items-center">
                      <h1 className="name h5 me-3 mb-0">
                        <Link href="/">{config.brand.name}</Link>
                      </h1>
                    </div>
                  ) : null
                }
              </div>
              {
                // Header menu
                config.header.menu ? (
                  <ul className="header-menu navbar-nav mt-2 mt-md-0 d-flex">
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
            <div>
              {
                // Header call to action button
                config.header.cta ? (
                  <Link
                    className="header-cta btn btn-primary"
                    href={config.header.cta.url}
                  >
                    {config.header.cta.button}
                  </Link>
                ) : null
              }
              {
                // Header log in button
                config.header.logIn ? (
                  <Link
                    className="header-login btn btn-white ms-1"
                    href={config.header.logIn.url}
                  >
                    {config.header.logIn.button}
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
