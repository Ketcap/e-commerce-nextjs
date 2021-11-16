import React from "react";
import * as S from "./style";

type ContainerProp = {
  children: JSX.Element;
};

const Container = ({
  children,
}: ContainerProp) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
