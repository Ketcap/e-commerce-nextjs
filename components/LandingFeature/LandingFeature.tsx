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
        <S.Title>Best Seller</S.Title>
        <S.BestSellerNavs>
          {BEST_SELLER_NAV.map((item, key) => (
            <S.NavTitle key={key}>
              {item}
            </S.NavTitle>
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
