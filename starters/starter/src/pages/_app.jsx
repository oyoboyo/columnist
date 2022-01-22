import "src/styles/index.scss";

import { Config } from "@columnist/core";

import { brand, head, header, footer } from "columnist.config";

/**
 * @file App
 *
 * @param {object} component - and page props
 * @returns
 */

function MyApp({ Component, pageProps }) {
  return (
    <Config
      value={{
        brand,
        head,
        header,
        footer,
      }}
    >
      <Component {...pageProps} />;
    </Config>
  );
}

export default MyApp;
