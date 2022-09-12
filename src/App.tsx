import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { MainTemplate, Registration, RequareAuth } from "./components";

import {
  AccountPage,
  BookInfoPage,
  CartPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { ROUTE } from "./routes";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={ROUTE.HOME} element={<MainTemplate />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTE.SEARCH} element={<SearchPage />} />
          <Route path={ROUTE.BOOK_INFO} element={<BookInfoPage />} />

          <Route path="/" element={<Registration />}>
            <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
            <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
          </Route>

          <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

          <Route element={<RequareAuth />}>
            <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
            <Route path={ROUTE.CART} element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
};