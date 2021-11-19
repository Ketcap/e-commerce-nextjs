import { Dropdown, Text } from "components";

import { Cart, Profile, Search } from "icons";

import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";

import { DROPDOWN_DATAS } from "mock/Dropdown";

import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.CurrencyLanguage>
          {DROPDOWN_DATAS.map((data, key) => (
            <Dropdown data={data} key={key} />
          ))}
        </S.CurrencyLanguage>
        <S.ItemsWrapper>
          <S.Item>
            <Profile />
            <Text
              color={colors.defaultBlack}
              fontSize={fontSizes.xxmedium}
              fontWeight={fontWeights.regular}
              marginLeft={6}
            >
              My Profile
            </Text>
          </S.Item>

          <S.CartItem>
            <S.Count
              color={colors.white}
              fontWeight={fontWeights.bold}
              fontSize={fontSizes.xxxsmall}
            >
              2
            </S.Count>
            <Cart />
          </S.CartItem>

          <S.Item>
            <Text
              color={colors.defaultBlack}
              fontSize={fontSizes.xxmedium}
              fontWeight={fontWeights.regular}
            >
              Items
            </Text>
          </S.Item>

          <S.Item>
            <Text
              color={colors.defaultBlack}
              fontSize={fontSizes.xxmedium}
              fontWeight={fontWeights.regular}
              opacity
            >
              $0.00
            </Text>
          </S.Item>

          <S.Item>
            <Search />
          </S.Item>
        </S.ItemsWrapper>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
