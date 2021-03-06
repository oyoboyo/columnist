// Next
import Head from "next/head";
// Core
import { useConfig } from "@columnist/core";

const PageHead = () => {
  const config = useConfig();
  return (
    <>
      <Head>
        <title>{config.brand.name}</title>
        <meta
          property="og:title"
          content={config.brand.name}
          key="og-title"
        />
        <meta
          property="og:site_name"
          content={config.brand.name}
          key="og-site-name"
        />
        <meta
          name="description"
          content={config.brand.tagline}
          key="desc"
        />
        <meta
          property="og:description"
          content={config.brand.tagline}
          key="og-desc"
        />
        {config.brand.image ? (
          <meta
            property="og:image"
            content={config.brand.image}
            key="og-image"
          />
        ) : null}
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
      </Head>
      {
        // Google Analytics
      }
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${config.head.GoogleAnalytics}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.head.GoogleAnalytics}');`,
        }}
      ></script>
    </>
  );
};

export default PageHead;
