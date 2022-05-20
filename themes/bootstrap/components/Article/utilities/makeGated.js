export default function makeGated(content, user) {
  if (!content.gated || (content.gated && user)) {
    return content.html;
  } else {
    return content.truncated;
  }
}
