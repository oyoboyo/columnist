import Image from "next/image";

import { Link } from "src/components";

const Featured = ({ content }) => {
  return (
    <article className="feature style-teaser border-bottom pb-4 mb-4">
      <Link className="feature-title-link text-dark" href={content.path}>
        <h1 className="feature-title h2">{content.title}</h1>
      </Link>
      <p className="feature-summary lead text-muted mb-4">{content.summary}</p>
      <Link className="feature-image-link" href={content.path}>
        <Image
          className="feature-image"
          width={640}
          height={640}
          layout="responsive"
          objectFit="cover"
          src={content.image.src}
          alt={content.image.alt}
        />
        <div className="feature-image-caption text-center mt-2">
          <small className="text-muted">{content.image.caption}</small>
        </div>
      </Link>
    </article>
  );
};

export default Featured;
