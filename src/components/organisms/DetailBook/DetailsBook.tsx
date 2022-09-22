import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookByDetails, getDetailsBook, useAppDispatch, useAppSelector } from "../../../store";
import { Breakpoint, Color } from "../../../ui";
import { ArrowLeft, ChevronBottomIcon, ChevronTopIcon } from "../../../assets";
import { useToggle, useWindowSize } from "../../../hooks";
import { Title, ButtonLike, Button } from "../../index";

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
  Rating,
  InfoContainer,
  InfoTitle,
  Info,
  MoreDetailse,
  ChevronButton,
  Preview,
} from "./styles";

export const DetailsBook = () => {
  const { isbn13 } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, bookDetails } = useAppSelector(getDetailsBook);
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();

  useEffect(() => {
    isbn13 && dispatch(fetchBookByDetails(isbn13));
  }, [dispatch, isbn13]);

  const handlePage = () => {
    navigate(-1);
  };

  const handleDetalise = (): void => {
    toggleIsOpen();
  };

  console.log();

  return (
    <StyledDetailsBook>
      <ButtonArrow onClick={handlePage}>
        <ArrowLeft
          width={width < Breakpoint.MD ? "30" : "40"}
          fill={Color.Primary}
          stroke={Color.Primary}
        />
      </ButtonArrow>

      <Title value={bookDetails.title} />

      <WrapperDetails>
        <DetailsContainer>
          <WrapperImage>
            <Image src={bookDetails.image} alt={bookDetails.title} />
            <Like>
              <ButtonLike />
            </Like>
          </WrapperImage>

          <WrapperInfo>
            <InfoTitleContainer>
              <Price>{bookDetails.price === "$0.00" ? "for FREE" : bookDetails.price}</Price>
              <Rating>{bookDetails.rating}</Rating>
            </InfoTitleContainer>

            <InfoContainer>
              <InfoTitle>Authors</InfoTitle>
              <Info>{bookDetails.authors}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Publisher</InfoTitle>
              <Info>{bookDetails.publisher}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Year</InfoTitle>
              <Info>{bookDetails.year}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Pages</InfoTitle>
              <Info>{bookDetails.pages}</Info>
            </InfoContainer>

            {isOpen && (
              <InfoContainer>
                <InfoTitle>ISBN</InfoTitle>
                <Info>{bookDetails.isbn13}</Info>
              </InfoContainer>
            )}

            <MoreDetailse>
              <Info>More detalise</Info>
              <ChevronButton onClick={handleDetalise}>
                {isOpen ? (
                  <ChevronBottomIcon width="16" fill={Color.Primary} />
                ) : (
                  <ChevronTopIcon width="16" fill={Color.Primary} />
                )}
              </ChevronButton>
            </MoreDetailse>

            <Button type="button" value="Add to cart"></Button>

            <Preview href={Object.values(bookDetails.pdf)[0]} target="_blank">
              Preview book
            </Preview>
          </WrapperInfo>
        </DetailsContainer>
        {/* <TabBar></TabBar>
        <DescriptionBar></DescriptionBar>
        <WrapperIcons></WrapperIcons> */}
      </WrapperDetails>
    </StyledDetailsBook>
  );
};
