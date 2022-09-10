import React from "react";
import { MouseEvent } from "react";
import { Button, Close, CustomLink, SearchHeader } from "../..";
import { ROUTE } from "../../../routes";
import {
  BurgerHeader,
  Description,
  StyledBurgerMenu,
  WrapperContent,
} from "./styles";

interface IProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  const isAuth = true; // TODO: исправить после авторизации

  return (
    <StyledBurgerMenu $isOpen={isOpen} onClick={handleBurger}>
      <WrapperContent
        onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <BurgerHeader>
          <Close onClick={handleBurger} />
        </BurgerHeader>

        <SearchHeader />
        {isAuth ? (
          <>
            <CustomLink to={ROUTE.FAVORITES}>
              <Description onClick={handleBurger}>Favorites</Description>
            </CustomLink>

            <CustomLink to={ROUTE.CART}>
              <Description onClick={handleBurger}>Cart</Description>
            </CustomLink>

            <Button
              type="button"
              value="Log Out"
              onClick={handleBurger}
            ></Button>
          </>
        ) : (
          // TODO настроить выход из аккаунта
          <CustomLink to={ROUTE.SIGN_IN}>
            <Button
              type="button"
              value="Sign In"
              onClick={handleBurger}
            ></Button>
          </CustomLink>
        )}
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
