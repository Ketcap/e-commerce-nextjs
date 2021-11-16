import * as S from "./style";
import Header from "../Header/Header";
import Container from "../Container/Container";

type LayoutProp = {
  children: JSX.Element;
};

export default function Layout({
  children,
}: LayoutProp) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      {/*Footer */}
    </>
  );
}
