import { useState } from "react";

import { Card } from "components";

import * as S from "./styles";

const BestSeller = () => {
  const [toggleState, setToggleState] =
    useState(1);

  return (
    <S.Container>
      <S.Title>BEST SELLER</S.Title>
      <S.MenuWrapper>
        <S.MenuText
          active={toggleState === 1}
          onClick={() => setToggleState(1)}
        >
          All
        </S.MenuText>
        <S.MenuText
          active={toggleState === 2}
          onClick={() => setToggleState(2)}
        >
          Bags
        </S.MenuText>
        <S.MenuText
          active={toggleState === 3}
          onClick={() => setToggleState(3)}
        >
          Sneakers
        </S.MenuText>
        <S.MenuText
          active={toggleState === 4}
          onClick={() => setToggleState(4)}
        >
          Belt
        </S.MenuText>
        <S.MenuText
          active={toggleState === 5}
          onClick={() => setToggleState(5)}
        >
          Sunglasses
        </S.MenuText>
      </S.MenuWrapper>
      <S.CardList>
        <Card /> <Card /> <Card /> <Card />
        <Card /> <Card />
      </S.CardList>
    </S.Container>
  );
};

export default BestSeller;
