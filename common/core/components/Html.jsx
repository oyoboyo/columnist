const Html = ({ children, className }) => (
  <div
    className={className ? className + " content-html" : "content-html"}
    dangerouslySetInnerHTML={{ __html: children }}
  />
);

export default Html;
