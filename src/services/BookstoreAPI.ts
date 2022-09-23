import axios from "axios";
import { IBookDetails, IBooks, IBooksBySearch } from "../types/types";

enum Endpoint {
  NEW = "new",
  SEARCH = "search/",
  BOOK = "books/",
}

class BookstoreAPI {
  private readonly BASE_URL = process.env.REACT_APP_BOOKSTORE_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNew() {
    const { data } = await this.API.get<IBooks>(Endpoint.NEW);

    return data;
  }

  public async getDetailsByIsbn13(isbn13: string) {
    const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${isbn13}`);

    return data;
  }

  public async getBooksBySearch(word: string) {
    const { data } = await this.API.get<IBooksBySearch>(`${Endpoint.SEARCH}${word}`);

    return data;
  }
}

export const bookstoreAPI = new BookstoreAPI();
