import * as S from "./style";

export type TextProps = {
  children: string;
  textAlign?: string;
  color: string;
  lineHeight?: string;
  fontSize: string;
  fontWeight: string;
  marginLeft?: number;
  opacity?: boolean;
  textLine?: boolean;
  onClick?: () => void;
};

const Text = ({
  children,
  textAlign,
  color,
  lineHeight,
  fontWeight,
  fontSize,
  marginLeft,
  opacity,
  textLine,
  onClick,
  ...props
}: TextProps) => {
  return (
    <S.Text
      textAlign={textAlign}
      color={color}
      marginLeft={marginLeft}
      opacity={opacity}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textLine={textLine}
      onClick={onClick}
      {...props}
    >
      {children}
    </S.Text>
  );
};

export default Text;
