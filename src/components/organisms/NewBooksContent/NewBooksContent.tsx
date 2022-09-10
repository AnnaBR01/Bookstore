import React from "react";
import { BookCard, Title } from "../../index";
import { BooksWrapper, StyledNewBooksContent } from "./styles";

const books = [
  {
    title: "Deno Succinctly",
    subtitle: "",
    isbn13: "9781642002140",
    price: "$0.00",
    image: "https://itbook.store/img/books/9781642002140.png",
    url: "https://itbook.store/books/9781642002140",
  },
  {
    title: "Robotics, AI, and Humanity",
    subtitle: "Science, Ethics, and Policy",
    isbn13: "9783030541729",
    price: "$59.99",
    image: "https://itbook.store/img/books/9783030541729.png",
    url: "https://itbook.store/books/9783030541729",
  },
  {
    title: "Introduction to Autonomous Robots, 3rd Edition",
    subtitle: "",
    isbn13: "9781493773077",
    price: "$20.99",
    image: "https://itbook.store/img/books/9781493773077.png",
    url: "https://itbook.store/books/9781493773077",
  },
  {
    title: "Learning Go",
    subtitle: "An Idiomatic Approach to Real-World Go Programming",
    isbn13: "9781492077213",
    price: "$35.88",
    image: "https://itbook.store/img/books/9781492077213.png",
    url: "https://itbook.store/books/9781492077213",
  },
  {
    title: "Open Workbook of Cryptology",
    subtitle: "A project-based introduction to crypto in Python",
    isbn13: "1001656678502",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001656678502.png",
    url: "https://itbook.store/books/1001656678502",
  },
  {
    title: "Embracing Modern C++ Safely",
    subtitle: "",
    isbn13: "9780137380350",
    price: "$44.87",
    image: "https://itbook.store/img/books/9780137380350.png",
    url: "https://itbook.store/books/9780137380350",
  },
  {
    title: "Retro Gaming with Raspberry Pi, 2nd Edition",
    subtitle: "",
    isbn13: "1001656317756",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001656317756.png",
    url: "https://itbook.store/books/1001656317756",
  },
];

export const NewBooksContent = () => {
  return (
    <StyledNewBooksContent>
      <Title value={"New releases book"} />
      <BooksWrapper>
        {books.map((book) => {
          return <BookCard {...book} />;
        })}
      </BooksWrapper>
    </StyledNewBooksContent>
  );
};
