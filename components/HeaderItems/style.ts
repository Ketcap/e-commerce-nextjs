import styled from "styled-components";
import { colors } from "../../theme";

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  color: #262626;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-left: 6px;
  user-select: none;
`;
export const Cost = styled(Text)`
  opacity: 0.5;
`;
export const Count = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
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

export const CartItem = styled(Item)`
  position: relative;
  height: 40px;
  width: 40px;
`;
