import * as S from "./style";
import Image from "next/image";
import stars from "public/Images/stars.png";
const Item = ({ item }: any) => {
  return (
    <S.ItemWrapper>
      <S.StyledImage
        src={item.image}
        width={299}
        height={272}
      />
      <S.ItemDetails>
        <S.ItemTitle>{item.title}</S.ItemTitle>
        <Image
          src={stars}
          alt="stars"
          width={120}
          height={15}
        />
        <S.CostWrapper>
          <S.ItemNewCOst>
            {item.newCost}
          </S.ItemNewCOst>
          <S.ItemCost>{item.cost}</S.ItemCost>
          <S.ItemDiscount>
            {item.discount}
          </S.ItemDiscount>
        </S.CostWrapper>
      </S.ItemDetails>
    </S.ItemWrapper>
  );
};

export default Item;
