import Image from "next/image";
import styled from "styled-components";
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

export const CostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
