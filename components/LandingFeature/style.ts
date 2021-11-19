import styled from "styled-components";

export const FeatureWrapper = styled.section``;
export const FeatureTop = styled.div`
  position: relative;
  height: 950px;
`;
export const PromotionCards = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 550px;
`;
export const BestSellerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 90px;
  width: 100%;
  height: 1010px;
`;

export const BestSellerNavs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 26px;
`;

export const BestSellerItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
`;