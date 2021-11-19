import { Heart, Star, CardIcon } from "icons";

import * as S from "./styles";

const Card = () => {
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
      <S.Hot>HOT</S.Hot>
      <S.CardDetails>
        <S.Title>Nike Air Max 270 React</S.Title>
        <S.StarContainer>
          <Star /> <Star /> <Star /> <Star />
          <Star />
        </S.StarContainer>
        <S.Prices>
          <S.ActivePrice>$299,43</S.ActivePrice>
          <S.OldPrice>$534,33</S.OldPrice>
          <S.Discount>24% Off</S.Discount>
        </S.Prices>
      </S.CardDetails>
    </S.Container>
  );
};

export default Card;
