import { MouseEvent } from "react";
import ReactStars from "react-rating-stars-component";
import { ButtonLike } from "../..";
import { Color } from "../../../ui";
import { IBookDetails } from "../../../types/types";
import {
  StyledFavoritesCard,
  WrapperImage,
  Image,
  InfoContainer,
  InfoTitleContainer,
  Price,
  WrapperInfo,
  InfoTitle,
  Info,
  Like,
} from "./styles";
import { useToggle } from "../../../hooks";
import { removeFavorite, useAppDispatch } from "../../../store";

interface IProps {
  book: IBookDetails;
}

export const FavoritesCard = ({ book }: IProps) => {
  const [isFavorites, toggleIsFavorites] = useToggle(true);
  const dispatch = useAppDispatch();
  const { title, authors, year, image, price, rating } = book;

  const handleDeleteFavorites = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(removeFavorite(book.isbn13));
    toggleIsFavorites();
  };
  return (
    <StyledFavoritesCard>
      <WrapperImage>
        <Image src={image} alt={title} />
      </WrapperImage>

      <WrapperInfo>
        <InfoContainer>
          <InfoTitle>{title}</InfoTitle>
          <Info>
            {authors}, {year}
          </Info>
        </InfoContainer>

        <InfoTitleContainer>
          <Price>{price === "$0.00" ? "for FREE" : price}</Price>
          <ReactStars
            count={5}
            value={rating}
            size={20}
            color={Color.Gray}
            activeColor={Color.Primary}
            edit={false}
            isHalf={true}
          />
        </InfoTitleContainer>
      </WrapperInfo>
      <Like onClick={handleDeleteFavorites}>
        <ButtonLike isFavorites={isFavorites} />
      </Like>
    </StyledFavoritesCard>
  );
};
