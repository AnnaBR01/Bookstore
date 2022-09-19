import styled from "styled-components";
import { Color, Media } from "../../../ui";

const Search = styled.div`
  justify-self: center;
  padding: 12px 16px 12px 20px;
  border: 1px solid ${Color.Secondary};
  min-width: 542px;
  display: flex;
  justify-content: space-between;

  ${Media.LG} {
    min-width: 287px;
    width: 100%;
  }

  ${Media.MD} {
    min-width: 271px;
  }
`;

const ButtonSearch = styled.button`
  display: flex;
  align-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export { Search, ButtonSearch };
