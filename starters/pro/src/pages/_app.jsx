import "src/styles/index.scss";
// Local components
import Layout from "../components/layout";
// Components
import { Head } from "@columnist/bootstrap";
// Config
import head from ".config";

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={pageProps.style}>
      <Head config={head} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
