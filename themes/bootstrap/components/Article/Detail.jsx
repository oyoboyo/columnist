// Utilities
import { makeStringFromDate, calcReadTimeFromText } from "@columnist/core";
// Hooks
import { useConfig } from "@columnist/core";
// Components
import Img from "../Img";
import { Html } from "@columnist/core";

const Detail = ({ content }) => {
  // Get detail config from config
  const config = useConfig();

  // Make date string from content date if date in detail config
  const contentDate =
    content.date && config.article.detail.date
      ? makeStringFromDate(content.date, config.article.detail.date)
      : false;

  // Calculate read time from content text if read time in detail config
  const contentReadTime = config.article.detail.readTime
    ? calcReadTimeFromText(content.text)
    : false;

  // Render article
  return (
    <article className="border-bottom pb-4 mb-4">
      <header>
        <h1 className="mt-2">{content.title}</h1>
        {content.summary ? (
          <p className="lead text-muted mb-3">{content.summary}</p>
        ) : null}
        <div className="d-flex justify-between mb-3">
          {contentDate ? (
            <small className="text-muted">{contentDate}</small>
          ) : null}
          {contentReadTime ? (
            <small className="text-muted">{contentReadTime} min read</small>
          ) : null}
        </div>
        {content.image ? (
          <div className="text-center">
            <Img
              width={640}
              height={380}
              src={content.image.src}
              alt={content.image.alt}
            />
            {content.image.caption ? (
              <small className="text-muted mt-2 ">
                {content.image.caption}
              </small>
            ) : null}
          </div>
        ) : null}
      </header>
      <main>
        <Html className="content-body serif mt-3">{content.html}</Html>
      </main>
      <footer>
        {content.author ? (
          <small className="text-muted">Article by {content.author}</small>
        ) : null}
      </footer>
    </article>
  );
};

export default Detail;
