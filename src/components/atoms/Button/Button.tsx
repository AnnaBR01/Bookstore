import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  value: string;
  onClick?: () => void;
}

export const Button = ({ type = "button", value, onClick }: IProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {value}
    </StyledButton>
  );
};
