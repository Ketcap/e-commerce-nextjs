import * as S from "./style";
import img from "public/Images/PromotionImage.png";
import Text from "components/Text/Text";
import { OFFER_BANNER } from "constants/index";
import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";
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
          fontWeight={fontWeights.bold}
        >
          {OFFER_BANNER}
        </Text>
      </S.PromotionTextWrapper>
    </S.PromotionImageWrapper>
  );
};

export default PromotionImage;
