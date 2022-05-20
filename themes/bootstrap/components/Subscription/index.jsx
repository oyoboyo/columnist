export default function Subscription({ content }) {
  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <h2 className="h4">{content.name}</h2>
        <div className="mb-3">{content.description}</div>
        <div className="h5 mb-3">${content.price} monthly</div>
        <div class="d-grid gap-2">
          <a href={content.button.url} className="btn btn-primary btn-lg">
            {content.button.text}
          </a>
        </div>
      </div>
    </div>
  );
}
