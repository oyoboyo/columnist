const Html = ({ children, className }) => (
	<div
		className={className ? className : "html"}
		dangerouslySetInnerHTML={{ __html: children }}
	/>
);

export default Html;
