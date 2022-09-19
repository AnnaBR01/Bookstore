import { IBook } from "../../../types/types";
import {
  StyledBookCard,
  WrapperImage,
  Image,
  BookName,
  BookDescription,
  Price,
} from "./styles";

interface IProps {
  book: IBook;
}

export const BookCard = ({ book }: IProps) => {
  return (
    <StyledBookCard>
      <WrapperImage>
        <Image src={book.image} alt={book.title} />
      </WrapperImage>
      <BookName>{book.title}</BookName>
      <BookDescription>
        {book.subtitle ? book.subtitle : "Other"}
      </BookDescription>
      <Price>{book.price === "$0.00" ? "for FREE" : book.price}</Price>
    </StyledBookCard>
  );
};
