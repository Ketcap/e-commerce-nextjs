import styled from "styled-components";

interface StyledTextProps {
  textAlign?: string;
  color: string;
  lineHeight?: "24" | string;
  fontSize: string;
  fontWeight: string;
  marginLeft?: number;
  opacity?: boolean;
  textLine?: boolean;
}

export const Text = styled.p<StyledTextProps>`
  font-style: normal;
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) =>
    lineHeight}px;
  margin-left: ${({ marginLeft }) =>
    marginLeft}px;
  opacity: ${({ opacity }) => opacity && 0.5};
  color: ${({ color }) => color};
  text-decoration-line: ${({ textLine }) =>
    textLine && "line-through"};
`;
