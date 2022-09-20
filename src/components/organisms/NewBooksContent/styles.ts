import styled from "styled-components";
import { Media } from "../../../ui";

const StyledNewBooksContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BooksWrapper = styled.ul`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  grid-gap: 48px;
  margin-top: 48px;

  ${Media.MD} {
    margin-top: 36px;
  }
`;

const StyledError = styled.div`
  align-self: center;
  margin-top: 20%;
`;

export { StyledNewBooksContent, BooksWrapper, StyledError };
