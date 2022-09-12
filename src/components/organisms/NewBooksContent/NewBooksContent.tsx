import React, { useEffect } from "react";
import {
  fetchBooks,
  getBooks,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import { Error } from "../..";

import { BookCard, Spinner, Title } from "../../index";
import { BooksWrapper, StyledError, StyledNewBooksContent } from "./styles";

export const NewBooksContent = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledNewBooksContent>
      <Title value={"New releases book"} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <StyledError>
          <Error value={error} />
        </StyledError>
      ) : (
        <BooksWrapper>
          {books.map((book) => {
            return <BookCard {...book} key={book.isbn13} />;
          })}
        </BooksWrapper>
      )}
    </StyledNewBooksContent>
  );
};
