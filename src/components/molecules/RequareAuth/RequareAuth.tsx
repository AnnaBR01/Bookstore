import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../../routes";

export const RequareAuth = () => {
  const isAuth = false; // TODO: исправить после авторизации

  return isAuth ? <Outlet /> : <Navigate to={`/${ROUTE.SIGN_IN}`} />;
};
