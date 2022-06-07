import unified from "unified";
import rehypeTruncate from "rehype-truncate";
import treeParser from "remark-parse";
import HASTParser from "remark-rehype";
import HTMLParser from "rehype-raw";
import stringParser from "rehype-stringify";

export default function processMarkdown(content, maxCharacters) {
  const html = unified()
    .use(treeParser)
    .use(HASTParser, { allowDangerousHtml: true })
    .use(HTMLParser)
    .use(rehypeTruncate, {
      disable: maxCharacters ? false : true,
      maxChars: maxCharacters,
    })
    .use(stringParser)
    .processSync(content).contents;

  return html;
}
