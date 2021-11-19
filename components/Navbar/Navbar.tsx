import { Text } from "components";
import { Logo } from "icons";

import { NAVBAR } from "constants/index";
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
          <S.StyledText
            color={colors.defaultBlack}
            fontSize={fontSizes.medium}
            fontWeight={fontWeights.medium}
            key={key}
          >
            {item}
          </S.StyledText>
        ))}
      </S.NavbarLinks>
    </S.NavbarWrapper>
  );
};

export default Navbar;
