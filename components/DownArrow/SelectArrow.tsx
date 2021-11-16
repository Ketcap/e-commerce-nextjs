import React from "react";
import { ArrowDown } from "../../icons";
import * as S from "./style";

type Props = {
  children: string | JSX.Element;
};

const SelectArrow = ({ children }: Props) => {
  return (
    <S.ArrowWrapper>
      <S.Text>{children}</S.Text>
      <ArrowDown />
    </S.ArrowWrapper>
  );
};

export default SelectArrow;
