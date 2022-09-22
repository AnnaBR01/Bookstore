import { useEffect, useState, CSSProperties } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookByDetails, getDetailsBook, useAppDispatch, useAppSelector } from "../../../store";
import { Breakpoint, Color } from "../../../ui";
import ReactStars from "react-rating-stars-component";
import Spinner from "react-spinners/ClipLoader";
import { ArrowLeft, ChevronBottomIcon, ChevronTopIcon } from "../../../assets";
import { useToggle, useWindowSize } from "../../../hooks";
import { Title, ButtonLike, Button, TabBar, Error } from "../../index";

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
  StyledError,
} from "./styles";

const override: CSSProperties = {
  margin: "200px auto",
};

export const DetailsBook = () => {
  const { isbn13 } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, bookDetails } = useAppSelector(getDetailsBook);
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();
  const [tab, setTab] = useState<"description" | "authors">("description");

  useEffect(() => {
    isbn13 && dispatch(fetchBookByDetails(isbn13));
  }, [dispatch, isbn13]);

  const handlePage = () => {
    navigate(-1);
  };

  const handleDetalise = (): void => {
    toggleIsOpen();
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

      {isLoading && (
        <Spinner color={Color.Primary} loading={isLoading} cssOverride={override} size={60} />
      )}

      {error && (
        <StyledError>
          <Error value={error} />
        </StyledError>
      )}

      {!isLoading && !error && (
        <>
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

                  <ReactStars
                    count={5}
                    value={+bookDetails.rating}
                    size={30}
                    color={Color.Gray}
                    activeColor={Color.Primary}
                    edit={false}
                    isHalf={true}
                  />
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
                      <ChevronTopIcon width="16" fill={Color.Primary} />
                    ) : (
                      <ChevronBottomIcon width="16" fill={Color.Primary} />
                    )}
                  </ChevronButton>
                </MoreDetailse>

                <Button type="button" value="Add to cart"></Button>

                {bookDetails.pdf && (
                  <Preview href={Object.values(bookDetails.pdf)[0]} target="_blank">
                    Preview book
                  </Preview>
                )}
              </WrapperInfo>
            </DetailsContainer>
            <TabBar value1="Description" value2="Authors" setTab={setTab} />

            <DescriptionBar>
              {tab === "description" ? bookDetails.desc : bookDetails.authors}
            </DescriptionBar>
          </WrapperDetails>
        </>
      )}
    </StyledDetailsBook>
  );
};
