import React from "react";
import { HeaderCustomLink, SearchInput } from "../..";
import { ROUTE } from "../../../routes";
import { Search, SearchIcon } from "./styles";

export const SearchHeader = () => {
  return (
    <>
      <Search>
        <SearchInput />
        <HeaderCustomLink to={ROUTE.SEARCH}>
          <SearchIcon />
        </HeaderCustomLink>
      </Search>
    </>
  );
};
