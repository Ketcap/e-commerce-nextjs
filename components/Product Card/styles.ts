import styled from "styled-components";
import { colors } from "../../theme";

export const HoverImage = styled.div`
  width: 278px;
  height: 219px;
  background: #ffffff;
  opacity: 0.95;
  position: absolute;
  top: 20px;
  left: 10px;
  justify-content: center;
  align-items: center;
  display: none;
`;

export const Container = styled.div`
  border: 3px solid #f6f7f8;
  position: relative;
  width: 298px;
  height: 385px;
  display: flex;
  flex-direction: column;

  :hover ${HoverImage} {
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  background-image: url("imageProduct.png");
  background-repeat: no-repeat;
  height: 358.31px;
  border-radius: 8px;
  border: none;
  background-color: #f6f7f8;
`;

export const IconContainer = styled.div`
  padding: 16px;
  border-radius: 50%;
  border: 2px solid rgba(51, 160, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :first-child {
    margin-right: 12px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.5px;
  color: ${colors.textColors.neutralDark};
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.p`
  color: ${colors.mainColors.primaryBlue};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 180%;
  /* or 32px */
  margin-right: 13px;
  letter-spacing: 0.5px;
`;

export const OldPrice = styled.p`
  color: ${colors.textColors.neutralGrey};

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  margin-right: 8px;
  letter-spacing: 0.5px;
  text-decoration-line: line-through;
`;

export const DiscountPrice = styled.p`
  color: ${colors.textColors.primaryRed};

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  letter-spacing: 0.5px;
`;
