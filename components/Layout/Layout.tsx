import {
  Header,
  Container,
  Navbar,
} from "components";

import * as S from "./style";

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
