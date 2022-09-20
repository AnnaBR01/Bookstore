import { Link } from "react-router-dom";
import { ROUTE } from "../../../routes/routes";
import { IBook } from "../../../types/types";
import { StyledBookCard, WrapperImage, Image, BookName, BookDescription, Price } from "./styles";

interface IProps {
  book: IBook;
}

export const BookCard = ({ book }: IProps) => {
  return (
    <StyledBookCard>
      <Link to={`${ROUTE.DETAILS_BOOK}${book.isbn13}`}>
        <WrapperImage>
          <Image src={book.image} alt={book.title} />
        </WrapperImage>
        <BookName>{book.title}</BookName>
        <BookDescription>{book.subtitle ? book.subtitle : "Other"}</BookDescription>
        <Price>{book.price === "$0.00" ? "for FREE" : book.price}</Price>
      </Link>
    </StyledBookCard>
  );
};
