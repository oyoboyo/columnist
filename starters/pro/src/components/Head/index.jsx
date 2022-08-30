// Import Next
import Head from "next/head";
// Import site
import { site } from ".config";

// Render page head
export default function PageHead({ content }) {
  return (
    <Head>
      {
        // If content render content
        content ? (
          <>
            {
              // If title ender title
              content.title ? (
                <>
                  {" "}
                  <title>{content.title}</title>
                  <meta
                    property="og:title"
                    content={content.title}
                    key="og-title"
                  />
                </>
              ) : null
            }
            {
              // If description render description
              content.description ? (
                <>
                  {" "}
                  <meta
                    name="description"
                    content={content.description}
                    key="desc"
                  />
                  <meta
                    property="og:description"
                    content={content.description}
                    key="og-desc"
                  />
                </>
              ) : null
            }
            {
              // If image render image
              content.image ? (
                <>
                  {" "}
                  <meta
                    property="og:image"
                    content={`${content.image.src}`}
                  />
                  <meta
                    name="twitter:image:alt"
                    content={content.image.alt}
                  />
                  <meta
                    name="twitter:card"
                    content="summary_large_image"
                  />
                </>
              ) : null
            }
          </>
        ) : null
      }

      <>
        {
          // Render site name
          <meta
            property="og:site_name"
            content={site.name}
            key="og-site-name"
          />
        }
        {
          // Render favicon

          <>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/favicon/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/favicon/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
          </>
        }
      </>
    </Head>
  );
}
