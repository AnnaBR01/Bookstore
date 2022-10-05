import { FavoritesBooks, FreeBooks } from "components";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <FavoritesBooks />
      <FreeBooks />
    </StyledFavoritesPage>
  );
};
