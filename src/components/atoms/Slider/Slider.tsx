import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BookCard } from "../../index";
import { IBook } from "../../../types/types";
import { SliderContainer, StyledSlide } from "./styles";

interface IProps {
  booksArray: IBook[];
}

export const Slider = ({ booksArray }: IProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
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
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

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
