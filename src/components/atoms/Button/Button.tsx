import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset" | undefined;
  value: string;
}

export const Button = ({ type, value }: IProps) => {
  return <StyledButton type={type}>{value}</StyledButton>;
};
