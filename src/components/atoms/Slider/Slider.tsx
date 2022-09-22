import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BookCard } from "../../index";
import { fetchBooks, getBooks, useAppDispatch, useAppSelector } from "../../../store";

export const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 10,
    },

    breakpoints: {
      "(max-width: 500px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div ref={ref} className="keen-slider">
      {books.map((book) => {
        return (
          <div className="keen-slider__slide">
            <BookCard book={book} key={book.isbn13} />
          </div>
        );
      })}
    </div>
  );
};
