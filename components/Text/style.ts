import styled from "styled-components";

interface StyledTextProps {
  textAlign?: "left";
  fontSize?: number;
  fontWeight?: string | number;
  lineHeight?: string;
  marginLeft?: number;
  opacity?: number;
  color?: string;
}

export const Text = styled.p<StyledTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize}em;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) =>
    lineHeight}px;
  margin-left: ${({ marginLeft }) =>
    marginLeft}px;
  opacity: ${({ opacity }) => opacity};
  color: ${({ color }) => color};
`;
