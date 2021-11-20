import styled from "styled-components";
import { colors } from "../../theme";

export const ImageContainer = styled.div`
  width: 417.94px;
  height: 358.31px;
  position: relative;
  background-image: url("featuredProduct.png");
  margin: 0 auto;
`;

export const Title = styled.p`
  position: absolute;
  top: 25px;
  left: 50px;
  width: 179px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  color: ${colors.textColors.neutralDark};
  letter-spacing: 0.5px;
`;

export const Price = styled.p`
  color: ${colors.mainColors.primaryBlue};
  position: absolute;
  right: 35px;
  top: 20px;
  width: 116px;
  height: 54px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 180%;
`;

export const OldPrice = styled.p`
  color: ${colors.textColors.neutralGrey};
  text-decoration: line-through;
  position: absolute;
  left: 145px;
  bottom: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.5px;
`;

export const DiscountPrice = styled.p`
  color: ${colors.textColors.primaryRed};
  position: absolute;
  left: 226px;
  bottom: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.5px;
`;
