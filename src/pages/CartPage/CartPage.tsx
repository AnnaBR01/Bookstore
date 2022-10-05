import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Title, CartCard, Button, Notification } from "components";
import { ArrowLeft } from "assets";
import { useToggle, useWindowSize } from "hooks";
import {
  calcTotal,
  getCartBooks,
  useAppDispatch,
  useAppSelector,
  resetDebounceSearchValue,
  getBooksBySearch,
} from "store";
import { IBookCart } from "types/types";
import { Breakpoint, Color } from "ui";
import {
  ButtonArrow,
  CartContainer,
  CartWrapper,
  Info,
  InfoContainer,
  InfoTitle,
  Message,
  Price,
  ResultContainer,
  StyledCartPage,
} from "./styles";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const { cartBooks, sum, vat, total } = useAppSelector(getCartBooks);
  const { debounceSearchValue } = useAppSelector(getBooksBySearch);
  const [currentCartBooks, setCurrentCartBooks] = useState<IBookCart[]>(cartBooks);
  const [isOpenNotification, toggleIsOpenNotification] = useToggle();

  const totalQuantity = cartBooks.reduce((sum, book) => {
    return book.quantity + sum;
  }, 0);

  const handlePage = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(calcTotal());
  }, [dispatch, totalQuantity]);

  useEffect(() => {
    dispatch(resetDebounceSearchValue());
  }, [dispatch]);

  useEffect(() => {
    debounceSearchValue &&
      setCurrentCartBooks(
        cartBooks.filter((book) => {
          return book.title.toLowerCase().includes(debounceSearchValue.toLowerCase());
        }),
      );
    !debounceSearchValue && setCurrentCartBooks(cartBooks);
  }, [debounceSearchValue, cartBooks]);

  const handleClick = (): void => {
    toggleIsOpenNotification();
  };

  return (
    <StyledCartPage>
      <CartWrapper>
        <ButtonArrow onClick={handlePage}>
          <ArrowLeft
            width={width < Breakpoint.MD ? "30" : "40"}
            fill={Color.Primary}
            stroke={Color.Primary}
          />
        </ButtonArrow>

        <Title value="Your cart" />

        <CartContainer>
          {currentCartBooks.length !== 0 ? (
            currentCartBooks.map((book) => {
              return <CartCard key={book.isbn13} book={book} />;
            })
          ) : (
            <Message>
              {debounceSearchValue ? "No results found. 😔" : "Your shopping cart is empty. 😔"}
            </Message>
          )}
        </CartContainer>

        {cartBooks.length !== 0 && (
          <ResultContainer>
            <InfoContainer>
              <InfoTitle>Sum total</InfoTitle>
              <Info>${sum.toFixed(2)}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>VAT</InfoTitle>
              <Info>${vat.toFixed(2)}</Info>
            </InfoContainer>

            <InfoContainer>
              <Price>Total </Price>
              <Price>${total.toFixed(2)}</Price>
            </InfoContainer>

            <Button type="button" value="Check out" onClick={handleClick}></Button>
          </ResultContainer>
        )}

        <AnimatePresence>
          {isOpenNotification && (
            <Notification
              value="The order has been placed!"
              toggleIsOpenNotification={toggleIsOpenNotification}
            />
          )}
        </AnimatePresence>
      </CartWrapper>
    </StyledCartPage>
  );
};
