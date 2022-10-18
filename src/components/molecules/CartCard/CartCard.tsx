import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Close } from "components";
import { IBookCart } from "types/types";
import { ROUTE } from "routes";
import { removeFromCart, useAppDispatch, addQuantity, deleteQuantity } from "store";
import {
  StyledCartCard,
  WrapperImage,
  Image,
  InfoContainer,
  InfoTitleContainer,
  Price,
  WrapperInfo,
  InfoTitle,
  Info,
  CloseWrapper,
  QuantityWrapper,
  ButtonQuantity,
  Quantity,
  Minus,
  Plus,
} from "./styles";

const cartCardVariants = {
  visible: (index: number) => ({
    opacity: 1,
    x: "0",
    transition: { delay: index * 0.1, duration: 1 },
  }),
  hidden: { opacity: 0, x: "-100%" },
};

interface IProps {
  book: IBookCart;
  index: number;
}

export const CartCard = ({ book, index }: IProps) => {
  const dispatch = useAppDispatch();
  const { title, authors, year, image, price, isbn13, quantity } = book;

  const handleDeleteBookFromCart = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(removeFromCart(book.isbn13));
  };

  const handleAddQuantity = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(addQuantity(book.isbn13));
  };

  const handleDeleteQuantity = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(deleteQuantity(book.isbn13));
    if (book.quantity === 0) {
      dispatch(removeFromCart(book.isbn13));
    }
  };
  return (
    <StyledCartCard
      whileHover={{ scale: 1.1 }}
      variants={cartCardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <Link to={`${ROUTE.DETAILS_BOOK}${isbn13}`}>
        <WrapperImage>
          <Image src={image} alt={title} />
        </WrapperImage>
      </Link>

      <WrapperInfo>
        <InfoContainer>
          <InfoTitle>{title}</InfoTitle>
          <Info>
            {authors}, {year}
          </Info>
        </InfoContainer>

        <InfoTitleContainer>
          <QuantityWrapper>
            <ButtonQuantity onClick={handleDeleteQuantity}>
              <Minus />
            </ButtonQuantity>
            <Quantity> {quantity} </Quantity>
            <ButtonQuantity onClick={handleAddQuantity}>
              <Plus />
            </ButtonQuantity>
          </QuantityWrapper>

          <Price>{price === "$0.00" ? "for FREE" : price}</Price>
        </InfoTitleContainer>
      </WrapperInfo>
      <CloseWrapper onClick={handleDeleteBookFromCart}>
        <Close />
      </CloseWrapper>
    </StyledCartCard>
  );
};
