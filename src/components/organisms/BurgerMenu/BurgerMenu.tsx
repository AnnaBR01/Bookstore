import React from "react";
import { Button, Close, SearchHeader } from "../..";
import { BurgerHeader, StyledBurgerMenu, WrapperContent } from "./styles";

interface IProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  return (
    <StyledBurgerMenu $isOpen={isOpen}>
      <WrapperContent>
        <BurgerHeader>
          <Close onClick={handleBurger} />
        </BurgerHeader>

        <SearchHeader />

        <Button type="button" value="Sign In"></Button>
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
