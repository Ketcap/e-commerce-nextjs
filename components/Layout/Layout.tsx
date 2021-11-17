import * as S from "./style";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

type LayoutProp = {
  children: JSX.Element;
};

export default function Layout({
  children,
}: LayoutProp) {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <S.Divider />
      <Container>
        <Navbar />
      </Container>
      <main>{children}</main>
      {/*Footer */}
    </>
  );
}
