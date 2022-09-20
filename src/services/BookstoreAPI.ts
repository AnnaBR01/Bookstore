import axios from "axios";
import { IBooks } from "../types/types";

enum Endpoint {
  NEW = "new",
  //   SEARCH = "search/", // TODO
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
    const { data } = await this.API.get<any>(`${Endpoint.BOOK}${isbn13}`);

    return data;
  }
}

export const bookstoreAPI = new BookstoreAPI();
