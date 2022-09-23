import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BookCard } from "../../index";
import { IBook } from "../../../types/types";
import { SliderContainer, StyledSlide } from "./styles";

interface IProps {
  booksArray: IBook[];
}

export const Slider = ({ booksArray }: IProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 32,
    },

    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
    loop: true,
  });

  return (
    <SliderContainer ref={ref} className="keen-slider">
      {booksArray.map((book) => {
        return (
          <StyledSlide className="keen-slider__slide">
            <BookCard book={book} key={book.isbn13} />
          </StyledSlide>
        );
      })}
    </SliderContainer>
  );
};
