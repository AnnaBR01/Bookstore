import { Link } from "react-router-dom";
import { SearchInput } from "../..";
import { SearchIcon } from "../../../assets";
import { ROUTE } from "../../../routes/routes";
import { Color } from "../../../ui";
import { Search, ButtonSearch } from "./styles";

export const SearchHeader = () => {
  return (
    <>
      <Search>
        <SearchInput />
        <Link to={ROUTE.SEARCH}>
          <ButtonSearch>
            <SearchIcon width="20" fill={Color.Secondary} />
          </ButtonSearch>
        </Link>
      </Search>
    </>
  );
};
