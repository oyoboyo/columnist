import "src/styles/index.scss";

import { Config } from "@columnist/core";

import config from "columnist.config";

/**
 * @file App
 *
 * @param {object} component - and page props
 * @returns
 */

function MyApp({ Component, pageProps }) {
  return (
    <Config value={config}>
      <Component {...pageProps} />
    </Config>
  );
}

export default MyApp;
