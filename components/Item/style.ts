import Image from "next/image";
import styled from "styled-components";
import { colors } from "theme";
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #f6f7f8;
  width: 298px;
  height: 385px;
  margin-top: 24px;
`;
export const StyledImage = styled(Image)``;
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35%;
  align-items: center;
  padding: 14px 35px 22px 35px;
`;
export const ItemTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #223263;
`;
export const CostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ItemCost = styled.h1`
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.5px;
  text-decoration-line: line-through;
  color: #9098b1;
`;
export const ItemDiscount = styled.h1`
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: ${colors.primaryPink};
`;
export const ItemNewCOst = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 180%;
  letter-spacing: 0.5px;
  color: ${colors.primaryBlue};
`;
