import { colors, typography } from "theme";
import * as S from "./style";

export type TextProps = {
  children: JSX.Element | string;
  textAlign?: "left";
  color?: string;
  marginLeft?: number;
  lineHeight?: string;
  variant:
    | "banner"
    | "header"
    | "cost"
    | "navbar";
  onClick?: () => void;
};

const Text = ({
  children,
  textAlign,
  color = colors.currentDark,
  lineHeight,
  variant,
  onClick,
  ...props
}: TextProps) => {
  const { fontSize, fontWeight } =
    typography[variant];

  return (
    <S.Text
      textAlign={textAlign}
      color={color}
      marginLeft={
        variant === "header" ? 6 : undefined
      }
      opacity={
        variant === "cost" ? 0.5 : undefined
      }
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      onClick={onClick}
      {...props}
    >
      {children}
    </S.Text>
  );
};

export default Text;
