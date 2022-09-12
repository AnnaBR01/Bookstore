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
  isbn13: string;
}

export const BookCard = ({ title, subtitle, image, price, isbn13 }: IProps) => {
  let bookDescription;
  subtitle ? (bookDescription = subtitle) : (bookDescription = "Other");

  let bookPrice;
  price !== "$0.00" ? (bookPrice = price) : (bookPrice = "for FREE");

  return (
    <StyledBookCard>
      <WrapperImage>
        <Image src={image} alt="New book" />
      </WrapperImage>
      <BookName>{title}</BookName>
      <BookDescription>{bookDescription}</BookDescription>
      <Price>{bookPrice}</Price>
    </StyledBookCard>
  );
};
