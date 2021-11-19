import Text from "components/Text/Text";
import styled from "styled-components";
import { colors } from "theme/index";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 66px;
`;
export const CurrencyLanguage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled(Text)`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background-color: ${colors.brandPink};
  border-radius: 50%;
  user-select: none;
  border: 2px solid #ffffff;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  width: 40px;
`;
