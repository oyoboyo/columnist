import makeClasses from "./utilities/makeClasses";

export default function Section({ title, children, name, style }) {
  // Make classes
  const { containerClass, columnClass } = makeClasses(name, style);
  return (
    <div className={`${containerClass}${columnClass} mb-3`}>
      {
        // Column title
        title ? (
          <h1 className="column-title h5 fw-bold border-bottom pb-2 mb-3 ms-md-5 me-md-5">
            {title}
          </h1>
        ) : null
      }
      {
        // column children
        children
      }
    </div>
  );
}
