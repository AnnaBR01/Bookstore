import React, { CSSProperties } from "react";
import {
  StyledSearchPage,
  StyledError,
  SearchBooks,
  Info,
  BooksSearchWrapper,
  Message,
} from "./styles";
import Spinner from "react-spinners/ClipLoader";
import { useAppSelector, getBooksBySearch } from "../../store";
import { BookCard, Error, Title } from "../../components";
import { Color } from "../../ui";
import { NothingIcon } from "../../assets";

const override: CSSProperties = {
  margin: "200px auto",
};

export const SearchPage = () => {
  const { booksBySearch, isLoading, error, debounceSearchValue } = useAppSelector(getBooksBySearch);

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

      {/* <Pagination></Pagination> */}
    </StyledSearchPage>
  );
};
