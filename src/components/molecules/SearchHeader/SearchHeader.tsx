import React from "react";
import { CustomLink, SearchInput } from "../..";
import { ROUTE } from "../../../routes";
import { Search, SearchIcon } from "./styles";

export const SearchHeader = () => {
  return (
    <>
      <Search>
        <SearchInput />
        <CustomLink to={ROUTE.SEARCH}>
          <SearchIcon />
        </CustomLink>
      </Search>
    </>
  );
};
