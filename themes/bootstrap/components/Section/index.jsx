const Section = ({ title, children, name, style }) => {
  const containerClass = name ? `${name} ` : "";
  const columnClass =
    style && style === "column"
      ? "col-sm-10 col-md-9 col-lg-9 col-xl-8 col-xxl-7"
      : style && style === "wide"
      ? "col-md-12 col-lg-10 col-xxl-9"
      : style && style === "narrow"
      ? "col-sm-8 col-md-5 col-xxl-4"
      : "";
  return (
    <section className={`${containerClass}container-fluid mb-5`}>
      <div className="row alc jtc">
        <div className={columnClass}>
          {title ? (
            <h1 className="h5 fw-bold border-bottom pb-2 mb-3">{title}</h1>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
