import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset" | undefined;
  value: string;
  onClick: () => void;
}

export const Button = ({ type, value, onClick }: IProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {value}
    </StyledButton>
  );
};
