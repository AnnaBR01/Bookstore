import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks";
import { Title } from "../../index";
import { FavoritesWrapper, ButtonArrow, StyledFavoritesBooks } from "./styles";
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

      <Title value="New releases book" />

      <FavoritesWrapper>
        {favoritesBooks &&
          favoritesBooks.map((book) => {
            return <li key={book.isbn13}>{book.title}</li>; // TODO
          })}
      </FavoritesWrapper>
    </StyledFavoritesBooks>
  );
};
