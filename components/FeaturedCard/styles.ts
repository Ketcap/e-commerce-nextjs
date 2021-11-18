import styled from "styled-components";
import { colors } from "theme";

export const Container = styled.div`
  position: relative;
  width: 434.36px;
  height: 354.01px;
`;
export const ImageContainer = styled.div`
  background-image: url("/midProduct.png");
  background-repeat: no-repeat;
  width: 417.94px;
  height: 358.31px;
`;
export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  /* or 30px */
  color: ${colors.neutralDark};
  letter-spacing: 0.5px;
  width: 175px;
  position: absolute;
  top: 20px;
  left: 50px;
  white-space: normal;
`;
export const ActivePrice = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: ${colors.primaryBlue};
  position: absolute;
  top: 20px;
  right: 35px;
`;
export const OldPrice = styled.p`
  color: ${colors.neutralGray};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.5px;
  text-decoration-line: line-through;
  position: absolute;
  bottom: 25px;
  right: 210px;
  left: 140px;
`;
export const Discount = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  color: ${colors.primaryRed};
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 25px;
  right: 120px;
  left: 220px;
`;
