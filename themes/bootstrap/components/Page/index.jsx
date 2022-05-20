import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

function Main({ children }) {
  return (
    <main className="page-main container">
      <div className="row align-items justify-content-center">
        {children}
      </div>
    </main>
  );
}

export default function Page({ children, header }) {
  return (
    <div className="page container-fluid">
      <Head />
      <Header style={header} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
