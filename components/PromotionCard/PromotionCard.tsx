import { Text } from "components";

import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";

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
          <Text
            fontWeight={fontWeights.bolder}
            fontSize={fontSizes.xxmedium}
            color={colors.neutralDark}
          >
            {card.title}
          </Text>

          <S.LeftBottom>
            <Text
              fontWeight={fontWeights.medium}
              fontSize={fontSizes.xxmedium}
              color={colors.neutralGrey}
              textLine
            >
              {card.cost}
            </Text>
            <Text
              fontWeight={fontWeights.bold}
              fontSize={fontSizes.small}
              color={colors.brandPink}
            >
              {card.discount}
            </Text>
          </S.LeftBottom>
        </S.CardTextLeft>

        <S.CardTextRight>
          <Text
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.xxlarge}
            color={colors.brandPrimaryBlue}
          >
            {card.newCost}
          </Text>
        </S.CardTextRight>
      </S.CardTextWrapper>
    </S.PromotionCardWrapper>
  );
};

export default PromotionCard;
