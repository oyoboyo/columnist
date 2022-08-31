// Import Next
import { Html, Head, Main, NextScript } from "next/document";

// # Document
export default function Document() {
  // Render HTML document
  return (
    <Html>
      {
        // Render page head
        <Head />
      }
      {
        // Render body with main content and NextScript
        // Note: https://nextjs.org/docs/basic-features/script
        <body>
          <Main />
          <NextScript />
        </body>
      }
    </Html>
  );
}
