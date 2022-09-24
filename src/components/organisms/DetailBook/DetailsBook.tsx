import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Title, ButtonLike, Button, TabBar } from "../../index";
import { useToggle, useWindowSize } from "../../../hooks";
import { IBookDetails } from "../../../types/types";
import { Breakpoint, Color } from "../../../ui";
import { ArrowLeft, ChevronBottomIcon, ChevronTopIcon } from "../../../assets";
import {
  StyledDetailsBook,
  ButtonArrow,
  WrapperDetails,
  DetailsContainer,
  WrapperImage,
  Image,
  Like,
  WrapperInfo,
  InfoTitleContainer,
  Price,
  InfoContainer,
  InfoTitle,
  Info,
  MoreDetailse,
  ChevronButton,
  Preview,
  DescriptionBar,
} from "./styles";
import { useAppDispatch, addToFavotires, getUserInfo, useAppSelector } from "../../../store";

interface IProps {
  bookDetails: IBookDetails;
}

export const DetailsBook = ({ bookDetails }: IProps) => {
  const { title, image, price, rating, authors, publisher, year, isbn13, pages, pdf, desc } =
    bookDetails;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();
  const [isFavorites, toggleIsFavorites] = useToggle();
  const [tab, setTab] = useState<"description" | "authors">("description");
  const { isAuth } = useAppSelector(getUserInfo); // TODO настроить disabled на лайк

  const handlePage = () => {
    navigate(-1);
  };

  const handleDetalise = (): void => {
    toggleIsOpen();
  };

  const handleAddFavorites = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(addToFavotires(bookDetails));
    isAuth && toggleIsFavorites();
  };

  return (
    <StyledDetailsBook>
      <ButtonArrow onClick={handlePage}>
        <ArrowLeft
          width={width < Breakpoint.MD ? "30" : "40"}
          fill={Color.Primary}
          stroke={Color.Primary}
        />
      </ButtonArrow>

      <Title value={title} />

      <WrapperDetails>
        <DetailsContainer>
          <WrapperImage>
            <Image src={image} alt={title} />
            <Like onClick={handleAddFavorites}>
              <ButtonLike isFavorites={isFavorites} disabled={!isAuth} />
            </Like>
          </WrapperImage>

          <WrapperInfo>
            <InfoTitleContainer>
              <Price>{price === "$0.00" ? "for FREE" : price}</Price>

              <ReactStars
                count={5}
                value={+rating}
                size={30}
                color={Color.Gray}
                activeColor={Color.Primary}
                edit={false}
                isHalf={true}
              />
            </InfoTitleContainer>

            <InfoContainer>
              <InfoTitle>Authors</InfoTitle>
              <Info>{authors}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Publisher</InfoTitle>
              <Info>{publisher}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Year</InfoTitle>
              <Info>{year}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Pages</InfoTitle>
              <Info>{pages}</Info>
            </InfoContainer>

            {isOpen && (
              <InfoContainer>
                <InfoTitle>ISBN</InfoTitle>
                <Info>{isbn13}</Info>
              </InfoContainer>
            )}

            <MoreDetailse>
              <Info>More detalise</Info>
              <ChevronButton onClick={handleDetalise}>
                {isOpen ? (
                  <ChevronTopIcon width="16" fill={Color.Primary} />
                ) : (
                  <ChevronBottomIcon width="16" fill={Color.Primary} />
                )}
              </ChevronButton>
            </MoreDetailse>

            <Button type="button" value="Add to cart"></Button>

            {pdf && (
              <Preview href={Object.values(pdf)[0]} target="_blank">
                Preview book
              </Preview>
            )}
          </WrapperInfo>
        </DetailsContainer>
        <TabBar value1="Description" value2="Authors" setTab={setTab} />

        <DescriptionBar>{tab === "description" ? desc : authors}</DescriptionBar>
      </WrapperDetails>
    </StyledDetailsBook>
  );
};
