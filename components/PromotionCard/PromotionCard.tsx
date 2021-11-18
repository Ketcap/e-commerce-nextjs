import * as S from "./style";

const PromotionCard = ({ card }: any) => {
  return (
    <S.PromotionCardWrapper>
      <S.StyledImage
        src={card.image}
        layout="fill"
      />
      <S.CardTextWrapper>
        <S.CardTextLeft>
          <S.CardTitle>{card.title}</S.CardTitle>
          <S.LeftBottom>
            <S.CardCost>{card.cost}</S.CardCost>
            <S.CardDiscount>
              {card.discount}
            </S.CardDiscount>
          </S.LeftBottom>
        </S.CardTextLeft>

        <S.CardTextRight>
          <S.CardNewCost>
            {card.newCost}
          </S.CardNewCost>
        </S.CardTextRight>
      </S.CardTextWrapper>
    </S.PromotionCardWrapper>
  );
};

export default PromotionCard;
