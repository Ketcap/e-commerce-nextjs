import { MyProfile } from "icons";
import styled from "styled-components";

import { colors } from "theme";

export const Select = styled.select`
  border: none;
  :last-child {
    margin-left: 13px;
  }
`;
export const Option = styled.option`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: ${colors.dark};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ProfileWrapper = styled.div`
  display: flex;
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.dark};
`;
export const BasketContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 60px;
`;
export const BasketCount = styled.div`
  width: 20px;
  height: 20px;
  padding: 3px 7px;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryRed};
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 16px;
  border: 2px solid #ffffff;
`;
export const Count = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: ${colors.lightDark};
  opacity: 0.5;
  margin-left: 32px;
  margin-right: 6px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledMyProfile = styled(MyProfile)`
  margin-right: 6px;
`;
