import { Slider, SecondaryTitle } from "../..";
import { IBook } from "../../../types/types";
import { StyledSimilarBooks } from "./styles";

interface IProps {
  booksSimilar: IBook[];
}

export const SimilarBooks = ({ booksSimilar }: IProps) => {
  return (
    <StyledSimilarBooks>
      <SecondaryTitle value="Similar Books" />
      <Slider booksArray={booksSimilar} />
    </StyledSimilarBooks>
  );
};
