import { IBook } from "types/types";

export const getFreeBooks = (books: IBook[]) => {
  return books.filter((book) => book.price === "$0.00");
};
