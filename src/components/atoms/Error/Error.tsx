import React from "react";
import { StyledError } from "./styles";

interface IProps {
  value: string;
}

export const Error = ({ value }: IProps) => {
  return <StyledError> ❌{value}</StyledError>;
};
