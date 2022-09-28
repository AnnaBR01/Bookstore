import { Link } from "react-router-dom";
import { ROUTE } from "../../../routes/routes";
import { IBook } from "../../../types/types";
import {
  StyledBookCard,
  WrapperImage,
  Image,
  BookName,
  BookDescription,
  Price,
  InfoWrapper,
} from "./styles";

interface IProps {
  book: IBook;
}

export const BookCard = ({ book }: IProps) => {
  const { isbn13, title, subtitle, image, price } = book;

  return (
    <StyledBookCard>
      <Link to={`${ROUTE.DETAILS_BOOK}${isbn13}`}>
        <WrapperImage>
          <Image src={image} alt={title} />
        </WrapperImage>
        <InfoWrapper>
          <BookName>{title}</BookName>
          <BookDescription>{subtitle ? subtitle : "Other"}</BookDescription>
          <Price>{price === "$0.00" ? "for FREE" : price}</Price>
        </InfoWrapper>
      </Link>
    </StyledBookCard>
  );
};
