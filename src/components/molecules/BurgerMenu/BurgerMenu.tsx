import React from "react";
import { MouseEvent } from "react";
import { Button, Close, HeaderCustomLink, SearchHeader } from "../..";
import { ROUTE } from "../../../routes";
import { getUserInfo, useAppSelector } from "../../../store";
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
  const { isAuth } = useAppSelector(getUserInfo);

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
            <HeaderCustomLink to={ROUTE.FAVORITES}>
              <Description onClick={handleBurger}>Favorites</Description>
            </HeaderCustomLink>

            <HeaderCustomLink to={ROUTE.CART}>
              <Description onClick={handleBurger}>Cart</Description>
            </HeaderCustomLink>

            <Button
              type="button"
              value="Log Out"
              onClick={handleBurger}
            ></Button>
          </>
        ) : (
          // TODO настроить выход из аккаунта
          <HeaderCustomLink to={ROUTE.SIGN_IN}>
            <Button
              type="button"
              value="Sign In"
              onClick={handleBurger}
            ></Button>
          </HeaderCustomLink>
        )}
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
