import Image from "next/image";

import { Text } from "components";

import {
  colors,
  fontSizes,
  fontWeights,
} from "theme";
import stars from "public/Images/stars.png";

import * as S from "./style";

const Item = ({ item }: any) => {
  return (
    <S.ItemWrapper>
      <S.ItemSelections>
        <S.HoverFeature>
          <S.StyledFavorite />
          <S.StyledAddCart />
        </S.HoverFeature>
        <S.StyledImage
          src={item.image}
          width={299}
          height={272}
        />
      </S.ItemSelections>
      <S.ItemDetails>
        <Text
          color={colors.neutralDark}
          fontSize={fontSizes.small}
          fontWeight={fontWeights.bold}
        >
          {item.title}
        </Text>
        <Image
          src={stars}
          alt="stars"
          width={120}
          height={15}
        />
        <S.CostWrapper>
          <Text
            color={colors.brandPrimaryBlue}
            fontSize={fontSizes.small}
            fontWeight={fontWeights.bold}
          >
            {item.newCost}
          </Text>
          <Text
            color={colors.neutralGrey}
            fontSize={fontSizes.xsmall}
            fontWeight={fontWeights.regular}
            textLine
          >
            {item.cost}
          </Text>
          <Text
            color={colors.brandPink}
            fontSize={fontSizes.xsmall}
            fontWeight={fontWeights.bold}
          >
            {item.discount}
          </Text>
        </S.CostWrapper>
      </S.ItemDetails>
    </S.ItemWrapper>
  );
};

export default Item;
