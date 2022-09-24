import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks";
import { Title, FavoritesCard } from "../../index";
import { FavoritesWrapper, ButtonArrow, StyledFavoritesBooks, Message } from "./styles";
import { Color, Breakpoint } from "../../../ui";
import { ArrowLeft } from "../../../assets";
import { getFavoritesBooks, useAppSelector } from "../../../store";

export const FavoritesBooks = () => {
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);

  const handlePage = () => {
    navigate(-1);
  };

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
        {favoritesBooks.length !== 0 ? (
          favoritesBooks.map((book) => {
            return <FavoritesCard key={book.isbn13} book={book} />;
          })
        ) : (
          <Message>You don't have any favorite books. 😔</Message>
        )}
      </FavoritesWrapper>
    </StyledFavoritesBooks>
  );
};
