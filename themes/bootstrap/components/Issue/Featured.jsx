import Img from "../Img";
import { Link } from "@columnist/core";

const Featured = ({ content }) => {
  const image = content.image ? content.image : null;
  return (
    <article className="row jtc alc">
      <div className="col-md-6 col-lg-7 col-xxl-5 mb-4 mb-md-0">
        {image ? (
          <Img width={520} height={640} src={image.src} alt={image.alt} />
        ) : null}
      </div>
      <div className="col-md-6 col-lg-5">
        <div className="align-center justify-between d-flex">
          <span className="small text-muted">
            <Link href="/issues">Issues</Link>
          </span>
          <span className="small text-muted">{content.date}</span>
        </div>
        <h1 className="h2 mt-3">
          <Link className=" text-dark" href={`issues/${content.slug}`}>
            {content.title}
          </Link>
        </h1>
        <p className="mb-3">{content.summary}</p>
        <div className="row">
          <div className="col-md-12 mb-2">
            <h2 className="text-muted small border-bottom pb-2">Features</h2>
            <p className="serif small text-muted">In this issue:</p>
          </div>
          {content.features.map((feature, index) => (
            <div className="col-6 mb-2" key={index}>
              <Link
                className="text-dark"
                href={`${content.slug}/${feature.slug}`}
              >
                <h3 className="small h6 sans-serif fw-bold mb-1">
                  {feature.name}
                </h3>
                <p className="small">{feature.summary}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="d-flex align-center justify-content-between">
          <Link className="small" href={`issues/${content.slug}`}>
            Read issue
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Featured;
