import { Link, useConfig } from "@columnist/core";

const Footer = () => {
  const config = useConfig();
  return (
    <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center ps-md-4 pe-md-4 mt-5 pt-4 pb-4 border-top">
      <div className="d-flex align-items-center flex-column flex-sm-row small">
        <span className="text-muted me-2">
          © {new Date().getFullYear()} {config.brand.name}
        </span>
        <nav className="nav mt-1 mt-sm-0">
          {config.footer.menu.map((item, index) => (
            <Link key={index} className="nav-link" href={item.url}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <ul className="nav d-flex">
        {config.footer.social.map(({ url, Icon }, index) => (
          <li key={index} className="nav-item">
            <a className="nav-link" target="_blank" href={url}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
