import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

import { useConfig } from "@columnist/core";

/**
 * Page Component
 * Global structure and components
 */

const Page = ({ children, header }) => {
  const config = useConfig();

  return (
    <>
      <Head config={config.head} />
      <header>
        <Header brand={config.brand} config={config.header} style={header} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer brand={config.brand} config={config.footer} />
      </footer>
    </>
  );
};

export default Page;
