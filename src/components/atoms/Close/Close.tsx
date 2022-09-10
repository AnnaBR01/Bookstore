import React from "react";
import { StyledClose } from "./styles";

interface IProps {
  onClick: () => void;
}

export const Close = ({ onClick }: IProps) => {
  return <StyledClose onClick={onClick} />;
};
