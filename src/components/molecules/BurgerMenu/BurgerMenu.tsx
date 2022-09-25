import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { Button, Close, SearchHeader } from "../..";
import { ROUTE } from "../../../routes/routes";
import { fetchSignOut, getUserInfo, useAppDispatch, useAppSelector } from "../../../store";
import { BurgerHeader, Description, StyledBurgerMenu, WrapperContent } from "./styles";

interface IProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  const { isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const handleAuth = (): void => {
    dispatch(fetchSignOut());
    handleBurger();
  };

  return (
    <StyledBurgerMenu $isOpen={isOpen} onClick={handleBurger}>
      <WrapperContent onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <BurgerHeader>
          <Close onClick={handleBurger} />
        </BurgerHeader>

        <SearchHeader />
        {isAuth ? (
          <>
            <Link to={ROUTE.FAVORITES}>
              <Description onClick={handleBurger}>Favorites</Description>
            </Link>

            <Link to={ROUTE.CART}>
              <Description onClick={handleBurger}>Cart</Description>
            </Link>

            <Button type="button" value="Log Out" onClick={handleAuth}></Button>
          </>
        ) : (
          // TODO настроить выход из аккаунта
          <Link to={ROUTE.SIGN_IN}>
            <Button type="button" value="Sign In" onClick={handleBurger}></Button>
          </Link>
        )}
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
