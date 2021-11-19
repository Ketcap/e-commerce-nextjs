import { Text } from "components";
import styled from "styled-components";
import { colors } from "theme";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 0;
`;
export const Banner = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  height: 36px;
`;
export const StyledText = styled(Text)`
  cursor: pointer;
  :hover {
    color: ${colors.brandPrimaryBlue};
  }
`;
