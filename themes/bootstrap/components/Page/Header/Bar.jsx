import { Link } from "@columnist/core";

import { useConfig } from "@columnist/core";

const Bar = () => {
  const config = useConfig();

  return (
    <nav className="main bar navbar navbar-expand navbar-light bg-white p-md-4 mb-3 mb-md-5 border-bottom">
      <div className="container-fluid justify-between">
        <div className="d-flex align-center">
          <>
            {config.brand.logo ? (
              <span className="logo me-2 me-md-4">
                <Link href="/">
                  <img className="img-fluid" src={config.brand.logo} />
                </Link>
              </span>
            ) : null}
            {config.header.name ? (
              <div className="align-center">
                <h1 className="name h4 me-3 mb-0">
                  <Link href="/">{config.brand.name}</Link>
                </h1>
              </div>
            ) : null}
          </>
          <ul className="navbar-nav d-flex">
            {config.header.menu.map(({ url, title }, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" href={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {config.header.cta ? (
            <div>
              <Link
                className="btn btn-primary ms-3"
                href={config.header.cta.url}
              >
                {config.header.cta.button}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Bar;
