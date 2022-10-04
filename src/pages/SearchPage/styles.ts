import styled from "styled-components";
import { BODY2, Color, H2, Media } from "./../../ui";

const StyledSearchPage = styled.div`
  display: grid;
  grid-gap: 72px;
  margin-block: 72px;

  ${Media.MD} {
    grid-gap: 56px;
    margin-block: 56px;
  }
`;

const SearchBooks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  margin-top: 16px;
  ${BODY2}
  font-weight: 400;
`;

const BooksSearchWrapper = styled.ul`
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
  text-align: center;
  margin-top: 20%;
`;

const Message = styled.h3`
  align-self: center;
  margin-top: 10%;
  ${H2};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  border-top: 1 solid ${Color.Gray};
  ${Media.MD} {
    margin-top: 37px;
  }
`;

const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67px;
  color: ${Color.Primary};
  ${BODY2}
  background: none;
  border: none;
  cursor: pointer;

  :disabled {
    color: ${Color.Secondary};
  }

  ${Media.MD} {
    width: 60px;
  }
`;

const PageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px;
`;

const PageItem = styled.li``;

const PageItemButton = styled.button<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};
  ${BODY2};
  background: none;
  border: none;
  cursor: pointer;
`;

const MiddlePageList = styled.div`
  ${BODY2};
  color: ${Color.Primary};
`;

export {
  StyledSearchPage,
  StyledError,
  SearchBooks,
  Info,
  BooksSearchWrapper,
  Message,
  Pagination,
  ButtonArrow,
  PageList,
  PageItem,
  PageItemButton,
  MiddlePageList,
};
