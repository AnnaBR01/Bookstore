import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../types/types";

interface IFavoritesState {
  favoritesBooks: IBookDetails[];
}

const initialState: IFavoritesState = {
  favoritesBooks: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IBookDetails>) {
      const result = state.favoritesBooks.find((book) => book.isbn13 === payload.isbn13);
      if (!result) state.favoritesBooks.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favoritesBooks = state.favoritesBooks.filter((book) => {
        return book.isbn13 !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorite } = favoritesSlice.actions;
