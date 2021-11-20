import * as S from "./styles";
import {
  Profile,
  Basket,
  Search,
} from "../Icons/index";
const Header = () => {
  return (
    <S.Header>
      <S.Left>
        <S.Select name="language" id="language">
          <S.Option value="EN">EN</S.Option>
          <S.Option value="TR">TR</S.Option>
        </S.Select>
        <S.Select name="money" id="money">
          <S.Option value="USD">USD</S.Option>
          <S.Option value="TL">TL</S.Option>
        </S.Select>
      </S.Left>
      <S.ItemsWrapper>
        <S.Item>
          <Profile />
          <S.Text>My Profile</S.Text>
        </S.Item>

        <S.BasketWrapper>
          <S.Count>2</S.Count>
          <Basket />
        </S.BasketWrapper>

        <S.Item>
          <S.Text>Items</S.Text>
        </S.Item>

        <S.Item>
          <S.Text>$0.00</S.Text>
        </S.Item>

        <S.Item>
          <Search />
        </S.Item>
      </S.ItemsWrapper>
    </S.Header>
  );
};

export default Header;
