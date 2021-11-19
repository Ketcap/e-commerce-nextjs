import Image from "next/image";

import { FeaturedCard } from "components";

import PromotionImage from "public/promotionImage.png";
import * as S from "./styles";

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
