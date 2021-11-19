import Image from "next/image";
import styled from "styled-components";

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
  width: 67%;
  margin-bottom: 40px;
`;
export const CardTextRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 14px;
`;
