import React from "react";
import { StyledSecondaryTitle } from "./styles";

interface IProps {
  value: string;
}

export const SecondaryTitle = ({ value }: IProps) => {
  return <StyledSecondaryTitle>{value}</StyledSecondaryTitle>;
};
