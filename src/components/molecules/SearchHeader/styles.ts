import styled from "styled-components";
import { searchIcon } from "../../../assets";
import { Color, Icon, Media } from "../../../ui";

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

const SearchIcon = styled.button`
  ${Icon}
  background-image: url(${searchIcon});
  background-size: 100%;
  height: 20px;
  width: 20px;
`;

export { Search, SearchIcon };
