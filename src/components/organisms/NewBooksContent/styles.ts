import styled from "styled-components";
import { Media } from "../../../ui";

const StyledNewBooksContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  grid-gap: 48px;
  margin-top: 48px;

  ${Media.SM} {
    margin-top: 36px;
  }
`;

export { StyledNewBooksContent, BooksWrapper };
