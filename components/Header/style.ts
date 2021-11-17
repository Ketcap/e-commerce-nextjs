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
export const Text = styled.p`
  color: #262626;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-left: 6px;
  user-select: none;
`;
export const Cost = styled.p`
  color: #262626;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-left: 6px;
  user-select: none;
  opacity: 0.5;
`;
export const Count = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background-color: ${colors.primaryPink};
  border-radius: 50%;
  user-select: none;
  border: 2px solid #ffffff;
  font-weight: bold;
  font-size: 10px;
  color: #ffffff;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  width: 40px;
`;
