import { Link } from "src/components";

const ListItem = ({ content }) => {
  return (
    <article className="feature style-teaser row  alc pb-4">
      <div className="col-md-12">
        <Link className="feature-title-link text-dark" href={content.route}>
          <h1 className="feature-title h4">{content.title}</h1>
        </Link>
        <p className="small feature-summary">{content.summary}</p>
      </div>
    </article>
  );
};

export default ListItem;
