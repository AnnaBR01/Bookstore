import { FavoritesBooks } from "../../components";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <FavoritesBooks />
      {/* <PopularBooks booksSimilar={booksSimilar} /> */}
    </StyledFavoritesPage>
  );
};
