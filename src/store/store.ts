import { configureStore } from "@reduxjs/toolkit";
import {
  booksReducer,
  userReducer,
  bookDetailsReducer,
  bookFavoritesReducer,
  cartReducer,
  searchReducer,
} from ".";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    booksFavorites: bookFavoritesReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
