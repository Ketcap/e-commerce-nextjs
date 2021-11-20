import { Banner } from "../Icons";
import * as S from "./styles";
const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.LogoWrapper>
        <Banner />
        <S.Text>E-comm</S.Text>
      </S.LogoWrapper>
      <S.NavbarLinks>
        <S.Text>HOME</S.Text>
        <S.Text>BAGS</S.Text>
        <S.Text>SNEAKERS</S.Text>
        <S.Text>BELT</S.Text>
        <S.Text>CONTACT</S.Text>
      </S.NavbarLinks>
    </S.NavbarWrapper>
  );
};

export default Navbar;
