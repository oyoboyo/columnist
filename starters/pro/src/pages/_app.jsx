// Import styles
import "src/styles/index.scss";
// Import components
import { Layout, Head } from "../components";

// # App
function MyApp({ Component, pageProps }) {
  // Render app
  return (
    // Render layout with page style
    <Layout style={pageProps.style}>
      {
        // Render head with page meta
        pageProps.meta ? <Head content={pageProps.meta} /> : null
      }
      {
        // Render page children
        <Component {...pageProps} />
      }
    </Layout>
  );
}

export default MyApp;
