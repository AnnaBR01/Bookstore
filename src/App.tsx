import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { RequareAuth } from "./components/RequareAuth/RequareAuth";
import { AccountPage } from "./pages/AccountPage";
import { BookInfoPage } from "./pages/BookInfoPage";
import { CartPage } from "./pages/CartPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SearchPage } from "./pages/SearchPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ROUTE } from "./routes";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={ROUTE.HOME} element={<MainTemplate />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTE.SEARCH} element={<SearchPage />} />
          <Route path={ROUTE.BOOK_INFO} element={<BookInfoPage />} />

          <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
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
