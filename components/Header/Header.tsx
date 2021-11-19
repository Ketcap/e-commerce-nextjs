import { Basket, Search } from "icons";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Left>
        <S.Select name="language" id="language">
          <option value="EN">EN</option>
          <option value="TR">TR</option>
        </S.Select>
        <S.Select name="money" id="money">
          <option value="usd">USD</option>
          <option value="tl">TL</option>
        </S.Select>
      </S.Left>
      <S.Right>
        <S.ProfileWrapper>
          <S.StyledMyProfile />
          <S.Text>My profile</S.Text>
        </S.ProfileWrapper>
        <S.BasketContainer>
          <Basket />
          <S.BasketCount>2</S.BasketCount>
        </S.BasketContainer>
        <S.Text>Items</S.Text>
        <S.Wrapper>
          <S.Count>$0.00</S.Count>
          <Search />
        </S.Wrapper>
      </S.Right>
    </S.Header>
  );
};

export default Header;
