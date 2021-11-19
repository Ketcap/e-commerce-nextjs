import {
  Container,
  PromotionCard,
  PromotionImage,
} from "components";
import Item from "components/Item/Item";
import Text from "components/Text/Text";
import { BEST_SELLER_NAV } from "constants/index";
import { bestSellers } from "mock/Bestsellers";
import { promotionCard } from "mock/PromotionCard";
import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";
import * as S from "./style";

const LandingFeature = () => {
  return (
    <S.FeatureWrapper>
      <S.FeatureTop>
        <PromotionImage />
        <S.PromotionCards>
          {promotionCard.map((card, key) => (
            <PromotionCard
              card={card}
              key={key}
            />
          ))}
        </S.PromotionCards>
      </S.FeatureTop>
      <S.BestSellerWrapper>
        <Text
          color={colors.secondaryBlack}
          fontWeight={fontWeights.medium}
          fontSize={fontSizes.xlarge}
        >
          Best Seller
        </Text>
        <S.BestSellerNavs>
          {BEST_SELLER_NAV.map((item, key) => (
            <Text
              color={colors.secondaryBlack}
              fontWeight={fontWeights.regular}
              fontSize={fontSizes.xmedium}
              key={key}
            >
              {item}
            </Text>
          ))}
        </S.BestSellerNavs>
        <S.BestSellerItemWrapper>
          {bestSellers.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </S.BestSellerItemWrapper>
      </S.BestSellerWrapper>
    </S.FeatureWrapper>
  );
};

export default LandingFeature;
