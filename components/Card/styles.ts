import styled from "styled-components";

import { colors } from "theme";

export const Container = styled.div`
  position: relative;
  width: 298px;
  height: 385px;
  display: flex;
  flex-direction: column;
  border: 3px solid ${colors.cardBorder};
`;
export const HoverImage = styled.div`
  width: 278px;
  height: 219px;
  background: #ffffff;
  opacity: 0.95;
  position: absolute;
  top: 20px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
`;

export const ImageContainer = styled.div`
  background-image: url("/cardImage.png");
  background-repeat: no-repeat;
  height: 358.31px;
  border-radius: 8px;

  :hover {
    ~ ${HoverImage} {
      display: flex;
    }
  }
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
export const Hot = styled.div`
  background-color: ${colors.lightRed};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.5px;
  margin: 10px 0 6px 0;
  color: ${colors.neutralDark};
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
export const ActivePrice = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 180%;
  /* or 32px */

  letter-spacing: 0.5px;

  color: ${colors.primaryBlue};
`;
export const OldPrice = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  letter-spacing: 0.5px;
  text-decoration-line: line-through;
  color: ${colors.neutralGray};
  margin: 0 8px 0 13px;
`;
export const Discount = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  letter-spacing: 0.5px;

  /* Primary/Red */

  color: ${colors.primaryRed};
`;
export const StarContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
`;
