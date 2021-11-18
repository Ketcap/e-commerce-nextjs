import { FeaturedCard } from "components";
import * as S from "./styles";
import Image from "next/image";
import PromotionImage from "public/promotionImage.png";
const Featured = () => {
  return (
    <S.Featured>
      <Image
        src={PromotionImage}
        layout="responsive"
        alt="featured Photo"
      />
      <S.CardWrapper>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </S.CardWrapper>
    </S.Featured>
  );
};

export default Featured;
