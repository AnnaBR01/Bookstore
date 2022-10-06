import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { IBook } from "types/types";
import { Color } from "ui";
import {
  StyledBookCard,
  WrapperImage,
  Image,
  BookName,
  BookDescription,
  Price,
  InfoWrapper,
} from "./styles";

const bookCardVariants = {
  visible: (index: number) => ({ opacity: 1, scale: 1, transition: { delay: index * 0.1 } }),
  hidden: { opacity: 0, scale: 1.2 },
};

interface IProps {
  book: IBook;
  index: number;
}

export const BookCard = ({ book, index }: IProps) => {
  const { isbn13, title, subtitle, image, price } = book;

  return (
    <StyledBookCard
      whileTap={{ scale: 1.1 }}
      whileHover={{ boxShadow: `1px 1px 15px ${Color.Primary}` }}
      variants={bookCardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
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
