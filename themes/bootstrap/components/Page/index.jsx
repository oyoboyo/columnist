import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children, header }) => {
  return (
    <>
      <Head />
      <header>
        <Header style={header} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Page;
