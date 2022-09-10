import React from "react";
import {
  StyledBookCard,
  WrapperImage,
  Image,
  BookName,
  BookDescription,
  Price,
} from "./styles";

interface IProps {
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

export const BookCard = ({ title, subtitle, image, price }: IProps) => {
  let bookDescription;
  subtitle ? (bookDescription = subtitle) : (bookDescription = "Other");

  return (
    <StyledBookCard>
      <WrapperImage>
        <Image src={image} alt="New book" />
      </WrapperImage>
      <BookName>{title}</BookName>
      <BookDescription>{bookDescription}</BookDescription>
      <Price>{price}</Price>
    </StyledBookCard>
  );
};
