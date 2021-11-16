import {
  Cart,
  Profile,
  Search,
} from "../../icons";
import * as S from "./style";

const HeaderItems = () => {
  return (
    <S.ItemsWrapper>
      <S.Item>
        <Profile />
        <S.Text>My profile</S.Text>
      </S.Item>

      <S.CartItem>
        <S.Count>2</S.Count>
        <Cart />
      </S.CartItem>

      <S.Item>
        <S.Text>Items</S.Text>
      </S.Item>
      <S.Item>
        <S.Cost>$0.00</S.Cost>
      </S.Item>
      <S.Item>
        <Search />
      </S.Item>
    </S.ItemsWrapper>
  );
};

export default HeaderItems;
