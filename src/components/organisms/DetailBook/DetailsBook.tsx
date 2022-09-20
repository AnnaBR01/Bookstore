import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookByDetails, getDetailsBook, useAppDispatch, useAppSelector } from "../../../store";

import { StyledDetailsBook } from "./styles";

export const DetailsBook = () => {
  const { isbn13 } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, bookDetails } = useAppSelector(getDetailsBook);

  useEffect(() => {
    isbn13 && dispatch(fetchBookByDetails(isbn13));
  }, [dispatch, isbn13]);

  return (
    <StyledDetailsBook>
      <p>{bookDetails.title}</p>
    </StyledDetailsBook>
  );
};
