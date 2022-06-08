// Core
import { Link, useTheme } from "@columnist/core";

export default function Footer({ config, brand }) {
  const theme = useTheme();
  return (
    <footer className="page-footer container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center ps-md-4 pe-md-4 mt-5 pt-4 pb-4 border-top">
      <div className="d-flex align-items-center flex-column flex-sm-row small">
        {
          // Footer copyright
          <span className="footer-copyright text-muted me-2">
            © {new Date().getFullYear()} {brand.name}
          </span>
        }
        {
          // Footer menu
          config.menu ? (
            <nav className="footer-menu nav mt-1 mt-sm-0">
              {config.menu.map((item, index) => (
                <Link key={index} className="nav-link" href={item.url}>
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null
        }
      </div>
      {
        // Footer social
        config.social ? (
          <ul className="footer-social nav d-flex">
            {config.social.map(({ url, Icon }, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" target="_blank" href={url}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        ) : null
      }
    </footer>
  );
}
