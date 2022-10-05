import Spinner from "react-spinners/ClipLoader";
import React, { CSSProperties, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookCard, Error, Title } from "components";
import { useAppSelector, getBooksBySearch, fetchBooksBySearch, useAppDispatch } from "store";
import { Breakpoint, Color } from "ui";
import { ArrowLeftPagination, ArrowRightPagination, NothingIcon } from "assets";
import { ROUTE } from "routes";
import { useWindowSize } from "hooks";
import {
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
} from "./styles";

const override: CSSProperties = {
  margin: "200px auto",
};

export const SearchPage = () => {
  const { booksBySearch, isLoading, error, debounceSearchValue } = useAppSelector(getBooksBySearch);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPage = useParams().page;
  const { width = 0 } = useWindowSize();

  const handlePrevPage = () => {
    currentPage && +currentPage !== 1 && navigate(`/${ROUTE.SEARCH}${+currentPage + -1}`);
  };

  const handleNextPage = () => {
    currentPage && +currentPage !== 20 && navigate(`/${ROUTE.SEARCH}${+currentPage + 1}`);
  };

  const handlePage = (event: any) => {
    event.target.textContent && navigate(`/${ROUTE.SEARCH}${+event.target.textContent}`);
  };

  useEffect(() => {
    currentPage && dispatch(fetchBooksBySearch({ query: debounceSearchValue, page: +currentPage }));
  }, [currentPage, debounceSearchValue, dispatch]);

  return (
    <StyledSearchPage>
      <SearchBooks>
        <Title value={`"${debounceSearchValue}" search results`} />

        {isLoading && (
          <Spinner color={Color.Primary} loading={isLoading} cssOverride={override} size={60} />
        )}

        {error && (
          <StyledError>
            <Error value={error} />
          </StyledError>
        )}

        {!isLoading && !error && (
          <>
            {<Info>Found {booksBySearch.length} books</Info>}

            {booksBySearch.length !== 0 ? (
              <BooksSearchWrapper>
                {booksBySearch.map((book) => {
                  return <BookCard book={book} key={book.isbn13} />;
                })}
              </BooksSearchWrapper>
            ) : (
              <Message>
                No results found
                <NothingIcon width="60" height="70" fill={Color.Secondary} />
              </Message>
            )}
          </>
        )}
      </SearchBooks>

      <Pagination>
        <ButtonArrow
          onClick={handlePrevPage}
          disabled={currentPage && currentPage ? +currentPage === 1 : false}
        >
          <ArrowLeftPagination width={"25"} fill={Color.Primary} /> Prev
        </ButtonArrow>

        {currentPage && +currentPage <= 3 && width > Breakpoint.MD && (
          <PageList>
            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={+currentPage === 1}>
                {+currentPage === 1 && "1"}
                {+currentPage === 2 && +currentPage - 1}
                {+currentPage === 3 && +currentPage - 2}
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={+currentPage === 2}>
                {+currentPage === 1 && +currentPage + 1}
                {+currentPage === 2 && "2"}
                {+currentPage === 3 && +currentPage - 1}
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={+currentPage === 3}>
                {+currentPage === 1 && +currentPage + 2}
                {+currentPage === 2 && +currentPage + 1}
                {+currentPage === 3 && "3"}
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton $isActive={false}>...</PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={false}>
                20
              </PageItemButton>
            </PageItem>
          </PageList>
        )}

        {currentPage && +currentPage > 3 && +currentPage < 18 && width > Breakpoint.MD && (
          <PageList>
            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={false}>
                1
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton $isActive={false}>...</PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={true}>
                {+currentPage}
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton $isActive={false}>...</PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={false}>
                20
              </PageItemButton>
            </PageItem>
          </PageList>
        )}

        {currentPage && +currentPage >= 18 && width > Breakpoint.MD && (
          <PageList>
            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={false}>
                1
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton $isActive={false}>...</PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={+currentPage === 18}>
                {+currentPage === 18 && "18"}
                {+currentPage === 19 && +currentPage - 1}
                {+currentPage === 20 && +currentPage - 2}
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={+currentPage === 19}>
                {+currentPage === 18 && +currentPage + 1}
                {+currentPage === 19 && "19"}
                {+currentPage === 20 && +currentPage - 1}
              </PageItemButton>
            </PageItem>

            <PageItem>
              <PageItemButton onClick={handlePage} $isActive={+currentPage === 20}>
                {+currentPage === 18 && +currentPage + 2}
                {+currentPage === 19 && +currentPage + 1}
                {+currentPage === 20 && "20"}
              </PageItemButton>
            </PageItem>
          </PageList>
        )}

        {currentPage && width < Breakpoint.MD && (
          <MiddlePageList>Page {currentPage} of 20</MiddlePageList>
        )}

        <ButtonArrow
          onClick={handleNextPage}
          disabled={currentPage && currentPage ? +currentPage === 20 : false}
        >
          Next
          <ArrowRightPagination width={"25"} fill={Color.Primary} />
        </ButtonArrow>
      </Pagination>
    </StyledSearchPage>
  );
};
