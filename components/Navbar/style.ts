import styled from "styled-components";

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
export const BannerText = styled.p`
  font-weight: 700;
  font-size: 1.1em;
  line-height: 27px;
  margin-left: 6px;
`;
export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 36px;
`;
export const NavbarText = styled.li`
  font-weight: 500;
  font-size: 1.5em;
  list-style: none;
  color: #262626;
  cursor: pointer;
`;
