// Components
import { Header, Main, Footer } from "@columnist/bootstrap";
// Config
import footer from ".config/footer";
import brand from ".config/brand";
import header from ".config/header";

export default function Layout({ children, style }) {
  style ? style : { header: "bar" };
  return (
    <>
      <Header brand={brand} config={header} style={style.header} />
      <Main>{children}</Main>
      <Footer brand={brand} config={footer} />
    </>
  );
}
