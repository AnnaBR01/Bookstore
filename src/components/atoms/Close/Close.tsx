import React from "react";
import { CloseIcon } from "../../../assets";
import { Color } from "../../../ui";
import { StyledClose } from "./styles";

interface IProps {
  onClick?: () => void;
}

export const Close = ({ onClick }: IProps) => {
  return (
    <StyledClose onClick={onClick}>
      <CloseIcon width="24" fill={Color.Primary} />
    </StyledClose>
  );
};
