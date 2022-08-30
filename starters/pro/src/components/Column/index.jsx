import makeClasses from "./utilities/makeClasses";

export default function Section({ children, name, style }) {
  // Make classes
  const { containerClass, columnClass } = makeClasses(name, style);
  return (
    <div className={`${containerClass}${columnClass} mb-3`}>
      {children}
    </div>
  );
}
