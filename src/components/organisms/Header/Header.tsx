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
} from "./styles";
import { ROUTE } from "../../../routes";
import { changeTheme, useAppDispatch, useAppSelector } from "../../../store";
import { useToggle, useWindowSize } from "../../../hooks";
import { BurgerMenu, CustomLink, SearchHeader } from "../../index";
import { Breackpoint } from "../../../ui";

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
    <StyledHeader>
      <CustomLink to={ROUTE.HOME}>
        <LogoIcon />
      </CustomLink>

      {width > Breackpoint.MD && <SearchHeader />}

      <Theme onClick={handleTheme} $isDark={isDark} />

      <List>
        <Item key="1">
          <CustomLink to={ROUTE.FAVORITES}>
            <FavoritesIcon />
          </CustomLink>
        </Item>

        <Item key="2">
          <CustomLink to={ROUTE.CART}>
            <CartIcon />
          </CustomLink>
        </Item>

        <Item key="3">
          <CustomLink to={ROUTE.SIGN_IN}>
            <UserIcon />
          </CustomLink>
        </Item>
      </List>

      <BurgerIcon onClick={handleBurger} />

      {isOpen && <BurgerMenu handleBurger={handleBurger} isOpen={isOpen} />}
    </StyledHeader>
  );
};
