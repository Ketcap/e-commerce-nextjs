import Image from "next/image";
import styled from "styled-components";
import { colors } from "theme";

export const PromotionCardWrapper = styled.div`
  position: relative;
  width: 26em;
  height: 358.31px;
`;
export const StyledImage = styled(Image)`
  object-fit: cover;
`;
export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  padding: 1.7em 1.2em 0.5em 3em;
  width: 417.94px;
  height: 358.31px;
`;
export const CardTextLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const LeftBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
  margin-bottom: 40px;
`;
export const CardTextRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 14px;
`;
export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #223263;
`;
export const CardCost = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.5px;
  text-decoration-line: line-through;
  color: #9098b1;
`;
export const CardDiscount = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #fb7181;
`;
export const CardNewCost = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 180%;
  letter-spacing: 0.5px;
  color: ${colors.primaryBlue};
`;
