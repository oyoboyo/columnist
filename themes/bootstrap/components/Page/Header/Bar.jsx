import { Link } from "@columnist/core";

const Bar = ({ brand, config }) => {
  return (
    <nav className="main bar navbar navbar-expand navbar-light bg-white p-md-4 mb-3 mb-md-5 border-bottom">
      <div className="container-fluid justify-between">
        <div className="d-flex align-center">
          <>
            {config.options.logo ? (
              <span className="logo me-2 me-md-4">
                <Link href="/">
                  <img className="img-fluid" src={brand.logo} />
                </Link>
              </span>
            ) : null}
            {config.options.name ? (
              <div className="align-center">
                <h1 className="name h4 me-3 mb-0">
                  <Link href="/">{brand.name}</Link>
                </h1>
              </div>
            ) : null}
          </>
          <ul className="navbar-nav d-flex">
            {config.menu.map(({ url, title }, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" href={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {config.options.cta ? (
            <div>
              <Link className="btn btn-primary ms-3" href={config.cta.url}>
                {config.cta.button}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Bar;
