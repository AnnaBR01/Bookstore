import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { MainTemplate, Registration, RequareAuth } from "components";
import {
  AccountPage,
  DetailsBookPage,
  CartPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  SearchPage,
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  WelcomePage,
} from "pages";
import { ROUTE } from "routes/routes";
import { store } from "store";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={ROUTE.HOME} element={<MainTemplate />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTE.WELCOME} element={<WelcomePage />} />
          <Route path={`${ROUTE.SEARCH}:page`} element={<SearchPage />} />
          <Route path={`${ROUTE.DETAILS_BOOK}:id`} element={<DetailsBookPage />} />

          <Route element={<Registration />}>
            <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
            <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
          </Route>

          <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
          <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

          <Route element={<RequareAuth />}>
            <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
            <Route path={ROUTE.CART} element={<CartPage />} />
            <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
};
