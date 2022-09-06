import React from "react";
import {
  CartLogo,
  FavoritesLogo,
  Item,
  List,
  Search,
  SearchLogo,
  StyledHeader,
  Theme,
  UserLogo,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { SearchInput } from "../SearchInput/SearchInput";
import { ROUTE } from "../../routes";
import { CustomLink } from "../CustomLink/CustomLink";
import { changeTheme } from "../../store/features/userSlice";
import { useToggle } from "../../hooks/useToggle";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Header = () => {
  const { theme } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isDark, toggleIsInstallDark] = useToggle();

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

  return (
    <StyledHeader>
      <CustomLink to={ROUTE.HOME}>
        <Logo />
      </CustomLink>

      <Search>
        <SearchInput />
        <CustomLink to={ROUTE.SEARCH}>
          <SearchLogo />
        </CustomLink>
      </Search>

      <Theme onClick={handleTheme} $isDark={isDark} />

      <List>
        <Item>
          <CustomLink to={ROUTE.FAVORITES}>
            <FavoritesLogo />
          </CustomLink>
        </Item>

        <Item>
          <CustomLink to={ROUTE.CART}>
            <CartLogo />
          </CustomLink>
        </Item>

        <Item>
          <CustomLink to={ROUTE.SIGN_IN}>
            <UserLogo />
          </CustomLink>
        </Item>
      </List>
    </StyledHeader>
  );
};
