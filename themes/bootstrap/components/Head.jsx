// Next
import Head from "next/head";
// Core

export default function PageHead({ content, config }) {
  return (
    <Head>
      {content ? (
        // Content title
        content.title ? (
          <>
            <title>{content.title}</title>
            <meta
              property="og:title"
              content={content.title}
              key="og-title"
            />
            <meta
              property="og:site_name"
              content={content.title}
              key="og-site-name"
            />
          </>
        ) : (
          null(
            // Content title
            content.description ? (
              <>
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
          )(
            content.image ? (
              <>
                <meta
                  property="og:image"
                  content={`${content.image.src}`}
                />
                <meta
                  name="twitter:image:alt"
                  content={content.image.alt}
                />
                <meta name="twitter:card" content="summary_large_image" />
              </>
            ) : null
          )
        )
      ) : null}
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
    </Head>
  );
}
