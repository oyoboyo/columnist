export default function makeClasses(name, style) {
  const containerClass = name ? `${name} ` : "";
  let columnClass;

  switch (style) {
    case "wide":
      columnClass = "col-12";
      break;
    case "narrow":
      columnClass = "col-sm-8 col-md-7";
      break;
    case "half":
      columnClass = "col-sm-6";
      break;
    case "third":
      columnClass = "col-sm-4";
      break;
    default:
      columnClass = "col-sm-10 col-lg-9 col-xl-8 col-xxl-7";
  }

  return { containerClass, columnClass };
}
