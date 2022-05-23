export default function Item({ content }) {
  return (
    <div className="border-bottom mb-3">
      <div className="d-flex justify-content-between align-content-center">
        <div className="mb-3">
          <small className="text-muted">{content.label}</small>
          <div>{content.text}</div>
        </div>
        <button className="btn btn-sm btn-link">
          {content.button.text}
        </button>
      </div>
    </div>
  );
}
