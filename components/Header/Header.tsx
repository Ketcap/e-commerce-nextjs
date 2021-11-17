import Text from "components/Text/Text";
import { Cart, Profile, Search } from "icons";
import { DROPDOWN_DATAS } from "mock/Dropdown";
import Dropdown from "../Dropdown/Dropdown";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.CurrencyLanguage>
          {DROPDOWN_DATAS.map((data, key) => (
            <Dropdown data={data} key={key} />
          ))}
        </S.CurrencyLanguage>
        <S.ItemsWrapper>
          <S.Item>
            <Profile />
            <Text variant="header">
              My Profile
            </Text>
          </S.Item>

          <S.CartItem>
            <S.Count>2</S.Count>
            <Cart />
          </S.CartItem>

          <S.Item>
            <Text variant="header">Items</Text>
          </S.Item>

          <S.Item>
            <Text variant="cost">$0.00</Text>
          </S.Item>

          <S.Item>
            <Search />
          </S.Item>
        </S.ItemsWrapper>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
