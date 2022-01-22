import Image from "next/image";
import { Link } from "@columnist/core";

const Teaser = ({ content }) => {
  return (
    <article className="border-bottom mb-4 pb-4">
      <div className="row jtc alc">
        <div className="col-md-6">
          <div className="text-muted alc jbtw d-flex">
            <span className="small">{content.date}</span>
          </div>
          <h1 className="h2 mt-3">
            <Link className="text-dark" href={content.route}>
              {content.title}
            </Link>
          </h1>
          <p className="mb-3">{content.summary}</p>
          <Link className="small" href={content.route}>
            Read issue
          </Link>
        </div>
        <div className="col-md-6">
          <Image
            width={640}
            height={640}
            layout="responsive"
            objectFit="cover"
            src={content.image.src}
            alt={content.image.alt}
          />
        </div>
      </div>
    </article>
  );
};

export default Teaser;
