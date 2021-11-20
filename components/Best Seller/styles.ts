import styled from "styled-components";
import { colors } from "../../theme";

interface TextProps {
  active: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 500px;
`;

export const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  color: ${colors.textColors.primaryBlack};
`;

export const MenuContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const MenuItem = styled.p<TextProps>`
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  font-size: 22px;
  line-height: 33px;
  margin-right: 15px;
  color: ${(p) =>
    p.active && colors.mainColors.primaryBlue};
  text-decoration: ${(p) =>
    p.active && "underline"};
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 34px;
  grid-row-gap: 41px;
`;
