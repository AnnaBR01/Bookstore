import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import Spinner from "react-spinners/ClipLoader";
import { Button, Close, SearchHeader } from "../..";
import { ROUTE } from "../../../routes/routes";
import { fetchSignOut, getUserInfo, useAppDispatch, useAppSelector } from "../../../store";
import { BurgerHeader, Description, StyledBurgerMenu, WrapperContent, Error } from "./styles";

interface IProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  const { isPendingAuth, error, isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const handleAuth = (): void => {
    dispatch(fetchSignOut()).then(() => {
      handleBurger();
    });
  };

  return (
    <StyledBurgerMenu $isOpen={isOpen} onClick={handleBurger}>
      <WrapperContent onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <BurgerHeader>
          <Close onClick={handleBurger} />
        </BurgerHeader>

        <SearchHeader handleBurger={handleBurger} />
        {isAuth ? (
          <>
            <Link to={ROUTE.FAVORITES}>
              <Description onClick={handleBurger}>Favorites</Description>
            </Link>

            <Link to={ROUTE.CART}>
              <Description onClick={handleBurger}>Cart</Description>
            </Link>

            <Link to={ROUTE.ACCOUNT}>
              <Description onClick={handleBurger}>Account</Description>
            </Link>

            <Button type="button" value="Log Out" onClick={handleAuth}>
              <Spinner loading={isPendingAuth} size={25} />
            </Button>

            {error && <Error>{error}</Error>}
          </>
        ) : (
          <Link to={ROUTE.SIGN_IN}>
            <Button type="button" value="Sign In" onClick={handleBurger} />{" "}
          </Link>
        )}
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
