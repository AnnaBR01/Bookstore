import styled from "styled-components";
import {
  burgerIcon,
  cartIcon,
  favoritesIcon,
  logoIcon,
  moonIcon,
  sunIcon,
  usertIcon,
} from "../../../assets";
import { Color, Icon, Media } from "../../../ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 20% 55% 5% 20%;
  align-items: center;
  padding-block: 24px;
  border-bottom: 1px solid ${Color.Secondary};

  ${Media.MD} {
    grid-template-columns: none;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const LogoIcon = styled.button`
  ${Icon}
  background-image: url(${logoIcon});
  background-size: 100%;
  height: 30px;
  width: 137px;

  ${Media.SM} {
    height: 25px;
    width: 122px;
  }
`;

const Theme = styled.button<{ $isDark: boolean }>`
  ${Icon}
  background-image: ${({ $isDark }) =>
    $isDark ? `url(${sunIcon})` : `url(${moonIcon})`};
  background-size: 50%;
  height: 56px;
  width: 56px;

  :hover {
    box-shadow: 1px 1px 15px ${Color.Green};
  }

  ${Media.MD} {
    margin-left: auto;
  }
`;

const List = styled.ul`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;

  ${Media.MD} {
    grid-template-columns: none;
    margin-inline: 8px;
  }
`;

const Item = styled.li``;

const FavoritesIcon = styled.button`
  ${Icon}
  background-image: url(${favoritesIcon});
  background-size: 40%;
  height: 56px;
  width: 56px;

  ${Media.MD} {
    display: none;
  }
`;

const CartIcon = styled.button`
  ${Icon}
  background-image: url(${cartIcon});
  background-size: 40%;
  height: 56px;
  width: 56px;
`;

const UserIcon = styled.button`
  ${Icon}
  background-image: url(${usertIcon});
  background-size: 40%;
  height: 56px;
  width: 56px;

  ${Media.MD} {
    display: none;
  }
`;

const BurgerIcon = styled.button`
  ${Icon}
  background-image: url(${burgerIcon});
  background-size: 50%;
  height: 56px;
  width: 56px;
  display: none;
  :hover {
    box-shadow: 1px 1px 15px ${Color.Green};
  }

  ${Media.MD} {
    display: flex;
  }
`;

export {
  StyledHeader,
  LogoIcon,
  Theme,
  List,
  Item,
  FavoritesIcon,
  CartIcon,
  UserIcon,
  BurgerIcon,
};
