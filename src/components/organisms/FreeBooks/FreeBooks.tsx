import { Slider, SecondaryTitle } from "components";
import { getBooks, useAppSelector } from "store";
import { getFreeBooks } from "utils";
import { StyledFreeBooks } from "./styles";

export const FreeBooks = () => {
  const { books } = useAppSelector(getBooks);
  const freeBooks = getFreeBooks(books);

  return (
    <StyledFreeBooks>
      <SecondaryTitle value="Free books" />
      <Slider booksArray={freeBooks} />
    </StyledFreeBooks>
  );
};
