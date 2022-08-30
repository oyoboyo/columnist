import "src/styles/index.scss";

import { Layout, Head } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={pageProps.style}>
      <Head content={pageProps.meta} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
