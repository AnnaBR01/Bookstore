import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";
import searchLogo from "./../../assets/icons/search.svg";
import sunLogo from "./../../assets/icons/sun.svg";
import moonLogo from "./../../assets/icons/moon.svg";
import favoritesLogo from "./../../assets/icons/favorites.svg";
import cartLogo from "./../../assets/icons/cart.svg";
import usertLogo from "./../../assets/icons/user.svg";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 20% 55% 5% 20%;
  align-items: center;
  padding-block: 24px;
  border-bottom: 1px solid ${Color.Secondary};
`;

const Search = styled.div`
  justify-self: center;
  padding: 14px 16px 10px 20px;
  border: 1px solid ${Color.Secondary};
  min-width: 542px;
  display: flex;
  justify-content: space-between;

  ${Media.MD} {
    min-width: 287px;
  }

  ${Media.SM} {
    min-width: 271px;
  }
`;

const Theme = styled.button<{ $isDark: boolean }>`
  background: none;
  border: none;
  background-image: ${({ $isDark }) =>
    $isDark ? `url(${sunLogo})` : `url(${moonLogo})`};
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  height: 56px;
  width: 56px;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 15px ${Color.Green};
  }
`;

const List = styled.ul`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;

const Item = styled.li``;

const SearchLogo = styled.button`
  background: none;
  border: none;
  background-image: url(${searchLogo});
  background-size: 100%;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const FavoritesLogo = styled.button`
  background: none;
  border: none;
  background-image: url(${favoritesLogo});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  height: 56px;
  width: 56px;
  cursor: pointer;
`;

const CartLogo = styled.button`
  background: none;
  border: none;
  background-image: url(${cartLogo});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  height: 56px;
  width: 56px;
  cursor: pointer;
`;

const UserLogo = styled.button`
  background: none;
  border: none;
  background-image: url(${usertLogo});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  height: 56px;
  width: 56px;
  cursor: pointer;
`;

export {
  StyledHeader,
  Search,
  Theme,
  List,
  Item,
  SearchLogo,
  FavoritesLogo,
  CartLogo,
  UserLogo,
};
