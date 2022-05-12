import { Link, useConfig } from "@columnist/core";

const Hero = () => {
  const config = useConfig();
  return (
    <nav className="main hero navbar navbar-expand navbar-light bg-white pt-md-4 mb-3 mb-md-5 border-bottom">
      <div className="container-fluid flex-column">
        {config.header.logIn ? (
          <Link
            className="btn-login btn btn-white btn-lg me-sm-2 ms-2"
            href={config.header.logIn.url}
          >
            {config.header.logIn.button}
          </Link>
        ) : null}
        <div className="row justify-content-center">
          {config.header.logo ? (
            <div className="logo mt-4 mb-3">
              <Link href="/">
                <img className="img-fluid" src={config.brand.logo} />
              </Link>
            </div>
          ) : null}
          {config.header.name ? (
            <h1 className=" name h3 text-center">
              <Link href="/">{config.brand.name}</Link>
            </h1>
          ) : null}
          {config.header.tagline ? (
            <div className="tagline text-center mb-3">{config.brand.tagline}</div>
          ) : null}
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
            {config.header.cta ? (
              <Link className="btn btn-primary me-sm-2" href={config.header.cta.url}>
                {config.header.cta.button}
              </Link>
            ) : null}
            <ul className="navbar-nav d-flex mt-1 mt-sm-0 justify-content-center">
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
