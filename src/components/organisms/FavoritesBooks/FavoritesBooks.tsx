import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks";
import { Title, FavoritesCard } from "../../index";
import { FavoritesWrapper, ButtonArrow, StyledFavoritesBooks, Message } from "./styles";
import { Color, Breakpoint } from "../../../ui";
import { ArrowLeft } from "../../../assets";
import {
  getFavoritesBooks,
  useAppSelector,
  getBooksBySearch,
  useAppDispatch,
  resetDebounceSearchValue,
} from "../../../store";
import { useEffect, useState } from "react";
import { IBookDetails } from "../../../types/types";

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
  }, []);

  useEffect(() => {
    debounceSearchValue
      ? setCurrentFavoritesBooks(
          favoritesBooks.filter((book) => {
            return book.title.toLowerCase().includes(debounceSearchValue.toLowerCase());
          }),
        )
      : setCurrentFavoritesBooks(favoritesBooks);
  }, [debounceSearchValue, favoritesBooks]);

  return (
    <StyledFavoritesBooks>
      <ButtonArrow onClick={handlePage}>
        <ArrowLeft
          width={width < Breakpoint.MD ? "30" : "40"}
          fill={Color.Primary}
          stroke={Color.Primary}
        />
      </ButtonArrow>

      <Title value="Favorites" />

      <FavoritesWrapper>
        {currentFavoritesBooks.length !== 0 ? (
          currentFavoritesBooks.map((book) => {
            return <FavoritesCard key={book.isbn13} book={book} />;
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
