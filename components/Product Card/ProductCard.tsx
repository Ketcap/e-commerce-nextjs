import React from "react";
import {
  GrayStar,
  Heart,
  CardIcon,
} from "../Icons/index";

import * as S from "./styles";

const ProductCard = () => {
  return (
    <S.Container>
      <S.ImageContainer />
      <S.HoverImage>
        <S.IconContainer>
          <Heart />
        </S.IconContainer>
        <S.IconContainer>
          <CardIcon />
        </S.IconContainer>
      </S.HoverImage>
      <S.ProductInfo>
        <S.Title>Nike Air Max 270 React</S.Title>
        <S.Stars>
          <GrayStar />
          <GrayStar />
          <GrayStar />
          <GrayStar />
          <GrayStar />
        </S.Stars>
        <S.PriceContainer>
          <S.Price>$299,43</S.Price>
          <S.OldPrice>$534,33</S.OldPrice>
          <S.DiscountPrice>
            24% Off
          </S.DiscountPrice>
        </S.PriceContainer>
      </S.ProductInfo>
    </S.Container>
  );
};

export default ProductCard;
