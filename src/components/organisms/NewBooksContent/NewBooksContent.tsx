import React, { CSSProperties, useEffect } from "react";
import { fetchBooks, getBooks, useAppDispatch, useAppSelector } from "../../../store";
import { Error } from "../..";

import { BookCard, Title } from "../../index";
import { BooksWrapper, StyledError, StyledNewBooksContent } from "./styles";
import Spinner from "react-spinners/ClipLoader";
import { Color } from "../../../ui";

const override: CSSProperties = {
  margin: "200px auto",
};

export const NewBooksContent = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledNewBooksContent>
      <Title value="New releases book" />

      {isLoading && (
        <Spinner color={Color.Primary} loading={isLoading} cssOverride={override} size={60} />
      )}

      {error && (
        <StyledError>
          <Error value={error} />
        </StyledError>
      )}

      <BooksWrapper>
        {books.map((book) => {
          return <BookCard book={book} key={book.isbn13} />;
        })}
      </BooksWrapper>
    </StyledNewBooksContent>
  );
};
