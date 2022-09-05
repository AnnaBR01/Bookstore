import React from "react";
import {
  CartLogo,
  FavoritesLogo,
  Item,
  List,
  Search,
  SearchLogo,
  StyledHeader,
  UserLogo,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { SearchInput } from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { CustomLink } from "../CustomLink/CustomLink";

export const Header = () => {
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
