import Head from "next/head";
import { useConfig } from "@columnist/core";

export default function DetailHead({ content }) {
  const config = useConfig();
  const siteUrl = config.brand.url;

  return (
    <Head>
      <title>{content.title}</title>
      <meta property="og:type" content="article" key="og-article" />
      <meta property="og:title" content={content.title} key="og-title" />
      <meta property="og:url" content={`${siteUrl}${content.route}`} />
      {content.summary ? (
        <>
          <meta name="description" content={content.summary} key="desc" />
          <meta property="og:description" content={content.summary} key="og-desc" />
        </>
      ) : null}
      {content.image ? (
        <>
          <meta property="og:image" content={`${siteUrl}${content.image.src}`} />
          <meta name="twitter:image:alt" content={content.image.alt} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : null}
    </Head>
  );
}
