export default function Item({ content, current }) {
  return (
    <div className=" mb-3 pb-3 border-bottom">
      <div className="d-flex">
        <div>
          <b>{content.name}</b>
          <div className="small">{content.description}</div>
        </div>
        {content.cancel && current ? (
          <button className="ms-3 btn btn-sm btn-link">
            {content.cancel.text}
          </button>
        ) : null}
      </div>
      {content.purchase && !current ? (
        <div className="d-grid gap-2 mt-2">
          <button className="btn btn-primary">
            {content.purchase.text}
          </button>
        </div>
      ) : null}
    </div>
  );
}
