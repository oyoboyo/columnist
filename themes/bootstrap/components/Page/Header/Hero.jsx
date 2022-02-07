import { Link, useConfig } from "@columnist/core";

const Hero = () => {
  const config = useConfig();
  return (
    <nav className="main hero navbar navbar-expand navbar-light bg-white pt-md-4 mb-3 mb-md-5 border-bottom">
      <div className="container-fluid flex-column">
        <div className="row justify-center">
          {config.header.options.logo ? (
            <div className="logo mt-3 mb-3">
              <Link href="/">
                <img className="img-fluid" src={config.brand.logo} />
              </Link>
            </div>
          ) : null}
          {config.header.options.name ? (
            <h1 className=" name h3 text-center">
              <Link href="/">{config.brand.name}</Link>
            </h1>
          ) : null}
          {config.header.options.tagline ? (
            <div className="tagline text-center mb-3">
              {config.brand.tagline}
            </div>
          ) : null}
          <div className="d-flex jtc">
            {config.header.options.cta ? (
              <Link
                className="btn btn-primary me-3"
                href={config.header.cta.url}
              >
                {config.header.cta.button}
              </Link>
            ) : null}

            <ul className="navbar-nav d-flex jtc">
              {config.header.menu.map(({ url, title }, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" href={url}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hero;
