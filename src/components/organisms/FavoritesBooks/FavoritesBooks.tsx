import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "hooks";
import { Title, FavoritesCard } from "components";
import { Color, Breakpoint } from "ui";
import { ArrowLeft } from "assets";
import {
  getFavoritesBooks,
  useAppSelector,
  getBooksBySearch,
  useAppDispatch,
  resetDebounceSearchValue,
} from "store";
import { IBookDetails } from "types/types";
import { FavoritesWrapper, ButtonArrow, StyledFavoritesBooks, Message } from "./styles";

export const FavoritesBooks = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);
  const { debounceSearchValue } = useAppSelector(getBooksBySearch);
  const [currentFavoritesBooks, setCurrentFavoritesBooks] =
    useState<IBookDetails[]>(favoritesBooks);

  const handlePage = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(resetDebounceSearchValue());
  }, [dispatch]);

  useEffect(() => {
    debounceSearchValue &&
      setCurrentFavoritesBooks(
        favoritesBooks.filter((book) => {
          return book.title.toLowerCase().includes(debounceSearchValue.toLowerCase());
        }),
      );
    !debounceSearchValue && setCurrentFavoritesBooks(favoritesBooks);
  }, [debounceSearchValue, favoritesBooks]);

  return (
    <StyledFavoritesBooks>
      <ButtonArrow onClick={handlePage} whileHover={{ scale: 1.2 }}>
        <ArrowLeft
          width={width < Breakpoint.MD ? "30" : "40"}
          fill={Color.Primary}
          stroke={Color.Primary}
        />
      </ButtonArrow>

      <Title value="Favorites" />

      <FavoritesWrapper>
        {currentFavoritesBooks.length !== 0 ? (
          currentFavoritesBooks.map((book, index) => {
            return <FavoritesCard key={book.isbn13} book={book} index={index} />;
          })
        ) : (
          <Message>
            {debounceSearchValue ? "No results found. 😔" : "You don't have any favorite books. 😔"}
          </Message>
        )}
      </FavoritesWrapper>
    </StyledFavoritesBooks>
  );
};
