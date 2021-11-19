import { Text } from "components";

import { OFFER_BANNER } from "constants/index";

import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";

import img from "public/Images/PromotionImage.png";

import * as S from "./style";

const PromotionImage = () => {
  return (
    <S.PromotionImageWrapper>
      <S.StyledImage
        src={img}
        alt="Promotion"
        layout="fill"
      />
      <S.PromotionTextWrapper>
        <Text
          color={colors.white}
          fontSize={fontSizes.large}
          fontWeight={fontWeights.bolder}
        >
          {OFFER_BANNER}
        </Text>
      </S.PromotionTextWrapper>
    </S.PromotionImageWrapper>
  );
};

export default PromotionImage;
