import * as S from "./styles";
import Image from "next/image";
import PromotionIImage from "../../public/promotionImage.png";
import { FeaturedCard } from "..";

const Featured = () => {
  return (
    <S.FeaturedContainer>
      <Image
        src={PromotionIImage}
        layout="responsive"
        alt="promo"
      />
      <S.PromotionText>
        Super Flash Sale 50% Off
      </S.PromotionText>
      <S.PromotionProducts>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </S.PromotionProducts>
    </S.FeaturedContainer>
  );
};

export default Featured;
