import Text from "components/Text/Text";
import { NAVBAR } from "constants/Navbar";
import { Logo } from "icons";
import * as S from "./style";

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.Banner>
        <Logo />
        <Text variant="banner">E-comm</Text>
      </S.Banner>
      <S.NavbarLinks>
        {NAVBAR.map((item, key) => (
          <Text variant="navbar" key={key}>
            {item}
          </Text>
        ))}
      </S.NavbarLinks>
    </S.NavbarWrapper>
  );
};

export default Navbar;
