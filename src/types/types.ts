export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface IBookResponse {
  error: string;
  total: string;
  books: IBook[];
}

export interface IBookResponseBySearch {
  total: string;
  page: string;
  books: IBook[];
}

export interface IBookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: { [key: string]: string };
}

export interface IBookCart {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: { [key: string]: string };
  quantity: number;
}

export interface SearchValue {
  query: string;
  page: number;
}
