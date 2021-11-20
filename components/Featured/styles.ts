import styled from "styled-components";
import { colors } from "../../theme";

export const FeaturedContainer = styled.div`
  width: 1900.48px;
  height: 653.73px;
  background-repeat: no-repeat;
  position: relative;
  margin: 0 auto;
`;

export const PromotionText = styled.p`
  color: ${colors.textColors.white};
  position: absolute;
  left: 101px;
  top: 224px;
  width: 573.17px;
  height: 228.49px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 150%;
  /* or 96px */

  letter-spacing: 0.5px;
`;

export const PromotionProducts = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 300px;
  top: 760px;
  margin: 0 auto;
`;
