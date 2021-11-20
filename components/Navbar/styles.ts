import styled from "styled-components";
import { colors } from "../../theme";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 30px auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  margin-left: 6px;
  cursor: pointer;
  color: ${colors.textColors.primaryBlack};
  :hover {
    color: ${colors.mainColors
      .primaryBlue} !important;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 36px;
`;
