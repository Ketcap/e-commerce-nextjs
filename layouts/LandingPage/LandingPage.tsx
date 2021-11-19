import { Header, Navbar } from "components";

import * as S from "./styles";

type LayoutProp = {
  children: JSX.Element;
};

const LandingPage = ({
  children,
}: LayoutProp) => {
  return (
    <div>
      <S.Container>
        <Header />
      </S.Container>
      <S.Line />
      <S.Container>
        <Navbar />
      </S.Container>
      {children}
    </div>
  );
};

export default LandingPage;
