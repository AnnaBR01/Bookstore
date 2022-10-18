import { Slider, SecondaryTitle } from "components";
import { IBook } from "types/types";
import { StyledSimilarBooks } from "./styles";

interface IProps {
  booksSimilar: IBook[];
}

export const SimilarBooks = ({ booksSimilar }: IProps) => {
  return (
    <StyledSimilarBooks>
      <SecondaryTitle value="Similar books" />
      <Slider booksArray={booksSimilar} />
    </StyledSimilarBooks>
  );
};
