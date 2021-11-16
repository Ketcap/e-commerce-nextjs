import React from "react";
import SelectArrow from "../DownArrow/SelectArrow";
import HeaderItems from "../HeaderItems/HeaderItems";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.CurrencyLanguage>
          <SelectArrow>EN</SelectArrow>
          <SelectArrow>USD</SelectArrow>
        </S.CurrencyLanguage>
        <HeaderItems />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
