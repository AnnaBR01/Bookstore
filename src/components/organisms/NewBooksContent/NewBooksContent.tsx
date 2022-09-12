import React, { useEffect } from "react";
import {
  fetchBooks,
  getBooks,
  useAppDispatch,
  useAppSelector,
} from "../../../store";

import { BookCard, Spinner, Title, Error } from "../../index";
import { BooksWrapper, StyledNewBooksContent } from "./styles";

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
        <Error value={error}></Error>
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
