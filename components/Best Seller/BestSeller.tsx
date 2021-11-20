import { useState } from "react";
import ProductCard from "../Product Card/ProductCard";

import * as S from "./styles";

const BestSeller = () => {
  const [toggleFilter, settoggleFilter] =
    useState(1);
  return (
    <S.Container>
      <S.Title>BEST SELLER</S.Title>
      <S.MenuContainer>
        <S.MenuItem
          active={toggleFilter === 1}
          onClick={() => settoggleFilter(1)}
        >
          All
        </S.MenuItem>
        <S.MenuItem
          active={toggleFilter === 2}
          onClick={() => settoggleFilter(2)}
        >
          Bags
        </S.MenuItem>
        <S.MenuItem
          active={toggleFilter === 3}
          onClick={() => settoggleFilter(3)}
        >
          Sneakers
        </S.MenuItem>
        <S.MenuItem
          active={toggleFilter === 4}
          onClick={() => settoggleFilter(4)}
        >
          Belt
        </S.MenuItem>
        <S.MenuItem
          active={toggleFilter === 5}
          onClick={() => settoggleFilter(5)}
        >
          Sunglasses
        </S.MenuItem>
      </S.MenuContainer>
      <S.CardList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </S.CardList>
    </S.Container>
  );
};

export default BestSeller;
