import styled from "styled-components";

import { colors } from "theme";

interface StyledTextProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;
export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  color: ${colors.logoColor};
`;
export const MenuWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const MenuText = styled.p<StyledTextProps>`
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  font-size: 22px;
  line-height: 33px;
  color: ${(p) => p.active && colors.primaryBlue};
  margin-right: 15px;
  text-decoration: ${(p) =>
    p.active && " underline"};
`;
export const CardList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 34px;
`;
