import { Favorite } from "icons";
import Image from "next/image";
import styled from "styled-components";
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #f6f7f8;
  width: 298px;
  height: 385px;
  margin-top: 24px;
`;
export const StyledImage = styled(Image)``;
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35%;
  align-items: center;
  padding: 14px 35px 22px 35px;
`;

export const CostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const HoverFeature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  background: white;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 0.9;
    z-index: 1;
  }
`;
export const ItemSelections = styled.div`
  position: relative;
`;
export const StyledFavorite = styled(Favorite)`
  cursor: pointer;
`;
