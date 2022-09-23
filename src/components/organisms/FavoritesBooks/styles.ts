import styled from "styled-components";
import { Media } from "../../../ui";

const StyledFavoritesBooks = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonArrow = styled.button`
  text-align: start;
  width: 50px;
  margin-bottom: 32px;
  background: none;
  border: none;
  cursor: pointer;

  ${Media.MD} {
    margin-bottom: 24px;
  }
`;

const FavoritesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 48px;
  margin-top: 48px;

  ${Media.MD} {
    margin-top: 36px;
  }
`;

export { StyledFavoritesBooks, ButtonArrow, FavoritesWrapper };
