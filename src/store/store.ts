import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, userReducer, bookDetailsReducer } from ".";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    // favorites: "",
    // cart: "",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
