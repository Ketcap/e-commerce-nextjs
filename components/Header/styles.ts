import styled from "styled-components";
import { colors } from "../../theme";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  border-bottom: 1px solid #fafafb;
`;
export const Left = styled.div``;

export const Select = styled.select`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  border: none;
  margin-right: 13px;
  color: ${colors.textColors.primaryBlack};
`;

export const Option = styled.option`
  border: none;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
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

export const BasketWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  width: 40px;
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
  background-color: ${colors.mainColors.color2};
  border-radius: 50%;
  user-select: none;
  border: 2px solid #ffffff;
  font-weight: bold;
  font-size: 10px;
  color: #ffffff;
`;
