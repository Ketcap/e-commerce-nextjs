import * as S from "./styles";

const FeaturedCard = () => {
  return (
    <S.Container>
      <S.ImageContainer />
      <S.Title>
        FS - Nike Air Max 270 React...
      </S.Title>
      <S.ActivePrice>$299,43</S.ActivePrice>
      <S.OldPrice>$534,33</S.OldPrice>
      <S.Discount>24% Off</S.Discount>
    </S.Container>
  );
};

export default FeaturedCard;
