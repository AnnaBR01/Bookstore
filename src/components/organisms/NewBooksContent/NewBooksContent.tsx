import Spinner from "react-spinners/ClipLoader";
import { CSSProperties, useEffect } from "react";
import { Error, BookCard, Title } from "components";
import { fetchBooks, getBooks, useAppDispatch, useAppSelector } from "store";
import { Color } from "ui";
import { BooksWrapper, StyledError, StyledNewBooksContent } from "./styles";

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
        {books.map((book, index) => {
          return <BookCard book={book} index={index} key={book.isbn13} />;
        })}
      </BooksWrapper>
    </StyledNewBooksContent>
  );
};
