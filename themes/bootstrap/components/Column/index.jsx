const Section = ({ title, children, name, style }) => {
  const containerClass = name ? `${name} ` : "";
  const columnClass =
    (style && style === "default") || !style || (style && style === "column")
      ? "col-sm-10 col-lg-9 col-xl-8 col-xxl-7"
      : style && style === "wide"
      ? "col-md-12 col-lg-10 col-xxl-9"
      : style && style === "narrow"
      ? "col-sm-8 col-md-5 col-xxl-4"
      : "";
  return (
    <div className={`${containerClass}container-fluid`}>
      <div className="row align-items justify-content-center">
        <div className={columnClass}>
          {title ? (
            <h1 className="h5 fw-bold border-bottom pb-2 mb-3 ms-md-5 me-md-5">
              {title}
            </h1>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
