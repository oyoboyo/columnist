import { Header, Main, Footer } from "..";

export default function Layout({ children, style }) {
  style = style ? style : { header: "bar" };
  return (
    <>
      <Header style={style.header} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
