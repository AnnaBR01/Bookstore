import { Slider, SecondaryTitle } from "../..";
import { getBooks, useAppSelector } from "../../../store";
import { getFreeBooks } from "../../../utils";

import { StyledFreeBooks } from "./styles";

export const FreeBooks = () => {
  const { books } = useAppSelector(getBooks);
  const freeBooks = getFreeBooks(books);
  console.log(freeBooks);

  return (
    <StyledFreeBooks>
      <SecondaryTitle value="Free books" />
      <Slider booksArray={freeBooks} />
    </StyledFreeBooks>
  );
};
