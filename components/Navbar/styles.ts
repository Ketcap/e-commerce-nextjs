import styled from "styled-components";

import { colors } from "theme";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: ${colors.logoColor};
  margin-left: 6.5px;
`;
export const Right = styled.div`
  display: flex;
`;
export const NavText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  color: ${colors.lightDark};
  :hover {
    color: ${colors.primaryBlue};
  }
  margin: 0 40px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;
