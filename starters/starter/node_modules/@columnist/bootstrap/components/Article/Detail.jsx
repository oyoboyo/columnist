import Img from "../Img";
import { Html } from "@columnist/core";

const Detail = ({ content }) => {
  const image = content.image ? content.image : null;
  return (
    <article className="border-bottom pb-4 mb-4">
      <header>
        <h1 className="mt-2">{content.title}</h1>
        {content.summary ? (
          <p className="lead text-muted mb-3">{content.summary}</p>
        ) : null}
        <div className="d-flex justify-between mb-3">
          {content.date ? (
            <>
              <small className="text-muted">{content.date}</small>
              <small className="text-muted">{content.readTime} min read</small>
            </>
          ) : null}
        </div>
        {content.image ? (
          <div className="text-center">
            <Img width={640} height={380} src={image.src} alt={image.alt} />
            {image.caption ? (
              <small className="text-muted mt-2 ">{image.caption}</small>
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
