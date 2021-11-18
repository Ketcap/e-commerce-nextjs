import { Logo } from "icons";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Left>
        <Logo />
        <S.LogoText>E-Comm</S.LogoText>
      </S.Left>
      <S.Right>
        <S.NavText>HOME</S.NavText>
        <S.NavText>BAGS</S.NavText>
        <S.NavText>SNEAKERS</S.NavText>
        <S.NavText>BELT</S.NavText>
        <S.NavText>CONTACT</S.NavText>
      </S.Right>
    </S.Navbar>
  );
};

export default Navbar;
