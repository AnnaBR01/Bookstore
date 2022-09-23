import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, userReducer, bookDetailsReducer, bookFavoritesReducer } from ".";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    booksFavorites: bookFavoritesReducer,
    // cart: "",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
