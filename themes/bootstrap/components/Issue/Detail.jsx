import Image from "next/image";
import { Html, Link } from "@columnist/core";
import { slugify } from "@columnist/core";
import Img from "../Img";

const Detail = ({ content }) => {
  const image = content.image ? content.image : null;
  const features = content.features ? content.features : null;
  return (
    <article>
      <header>
        <section className="row align-center justify-center mb-2">
          <div className="col-lg-8 d-flex align-center justify-between mb-3">
            <small className="fw-bold">
              Volume {content.volume}, issue {content.issue}
            </small>
            <small className="text-muted">{content.date}</small>
          </div>
          {content.image ? (
            <div className="col-md-7 col-lg-5 col-xxl-5 mb-3 mb-md-0">
              <Img width={480} height={640} src={image.src} alt={image.alt} />
            </div>
          ) : null}
          <div className="col-md-5 col-lg-5 col-xxl-4">
            <h1>{content.title}</h1>
            <p className="lead mb-3">{content.summary}</p>
            <h2 className="serif fw-bold h5 border-bottom pb-2 mt-3 mt-md-0">
              Features
            </h2>
            <p className="serif small">In this issue:</p>
            <nav className="row mb-2 mt-3">
              {features.map((feature) => (
                <Link
                  className="col-6 text-dark"
                  href={`#${slugify(feature.name)}`}
                >
                  <h3 className="h6 sans-serif fw-bold mb-1">{feature.name}</h3>
                  <p>{feature.summary}</p>
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </header>
      <main className="row align-center justify-center">
        <div className="col-md-7 col-lg-7 col-xxl-6">
          <Html className="content-body serif">{content.html}</Html>
        </div>
      </main>
    </article>
  );
};

export default Detail;
