import Text from "components/Text/Text";
import { NAVBAR } from "constants/index";
import { Logo } from "icons";
import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";
import * as S from "./style";

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.Banner>
        <Logo />
        <Text
          color={colors.secondaryBlack}
          marginLeft={6}
          fontSize={fontSizes.small}
          fontWeight={fontWeights.bold}
        >
          E-comm
        </Text>
      </S.Banner>
      <S.NavbarLinks>
        {NAVBAR.map((item, key) => (
          <Text
            color={colors.defaultBlack}
            fontSize={fontSizes.medium}
            fontWeight={fontWeights.medium}
            key={key}
          >
            {item}
          </Text>
        ))}
      </S.NavbarLinks>
    </S.NavbarWrapper>
  );
};

export default Navbar;
