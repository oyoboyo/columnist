export default function Author({ content, style }) {
  return style === "teaser" ? (
    content.name && content.route ? (
      <Link href={content.route}>
        <small>Article by {content.name}</small>
      </Link>
    ) : content.name ? (
      <div className="author d-flex align-items-center">
        {content.image ? (
          <div className="teaser-photo me-2">
            <img className="img-fluid rounded-circle" src={content.image.src} />
          </div>
        ) : null}
        <small className="text-muted">Article by {content.name}</small>
      </div>
    ) : (
      <small className="text-muted">Article by {content}</small>
    )
  ) : style === "detail" ? (
    <div className="author border-top mt-3 pt-3">
      <div className="d-flex align-items-centers mt-2">
        <div className="detail-photo me-3">
          <img className="img-fluid rounded-circle" src={content.image.src} />
        </div>
        <div className="">
          <h1 className="h6 mb-1">Article by {content.name}</h1>
          <div className="mb-2">{content.bio}</div>
          <small className="text-muted">Follow</small>
          <ul className="nav d-flex">
            {content.social.map(({ url, Icon }, index) => (
              <li key={index} className="nav-item">
                <a className="ps-0 nav-link" target="_blank" href={url}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
}
