import React from "react";
import {
  BurgerIcon,
  CartIcon,
  FavoritesIcon,
  Item,
  List,
  LogoIcon,
  StyledHeader,
  Theme,
  UserIcon,
  WrapperHeader,
} from "./styles";
import { ROUTE } from "../../../routes";
import { changeTheme, useAppDispatch, useAppSelector } from "../../../store";
import { useToggle, useWindowSize } from "../../../hooks";
import { BurgerMenu, HeaderCustomLink, SearchHeader } from "../../index";
import { Breackpoint, Container } from "../../../ui";

export const Header = () => {
  const { theme } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isDark, toggleIsInstallDark] = useToggle();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();

  const setAttributeTheme = (themeValue: "ligth" | "dark") => {
    document.documentElement.setAttribute("theme", `${themeValue}`);
  };

  setAttributeTheme(theme);

  const handleTheme = () => {
    if (theme === "dark") {
      dispatch(changeTheme("ligth"));
    } else {
      dispatch(changeTheme("dark"));
    }

    setAttributeTheme(theme);
    toggleIsInstallDark();
  };

  const handleBurger = (): void => {
    toggleIsOpen();
  };

  return (
    <WrapperHeader>
      <Container>
        <StyledHeader>
          <HeaderCustomLink to={ROUTE.HOME}>
            <LogoIcon />
          </HeaderCustomLink>

          {width > Breackpoint.MD && <SearchHeader />}

          <Theme onClick={handleTheme} $isDark={isDark} />

          <List>
            <Item key="1">
              <HeaderCustomLink to={ROUTE.FAVORITES}>
                <FavoritesIcon />
              </HeaderCustomLink>
            </Item>

            <Item key="2">
              <HeaderCustomLink to={ROUTE.CART}>
                <CartIcon />
              </HeaderCustomLink>
            </Item>

            <Item key="3">
              <HeaderCustomLink to={ROUTE.SIGN_IN}>
                <UserIcon />
              </HeaderCustomLink>
            </Item>
          </List>

          <BurgerIcon onClick={handleBurger} />

          {isOpen && <BurgerMenu handleBurger={handleBurger} isOpen={isOpen} />}
        </StyledHeader>
      </Container>
    </WrapperHeader>
  );
};
