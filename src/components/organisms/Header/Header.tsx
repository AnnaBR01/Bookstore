import { Link } from "react-router-dom";
import { BurgerMenu, HeaderCustomLink, SearchHeader } from "components";
import {
  LogoIcon,
  SunIcon,
  MoonIcon,
  FavoritesIcon,
  CartIcon,
  CartActiveIcon,
  UserIcon,
  BurgerIcon,
  FavoritesActiveIcon,
} from "assets";
import { ROUTE } from "routes";
import {
  changeTheme,
  getUserInfo,
  useAppDispatch,
  useAppSelector,
  getCartBooks,
  getFavoritesBooks,
} from "store";
import { useToggle, useWindowSize } from "hooks";
import { Breakpoint, Color, Container } from "ui";
import {
  ButtonBurger,
  ButtonFavorites,
  ButtonCart,
  ButtonLogo,
  ButtonUser,
  Item,
  List,
  StyledHeader,
  ButtonTheme,
  WrapperHeader,
} from "./styles";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const { theme } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const [isDark, toggleIsInstallDark] = useToggle();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();
  const { cartBooks } = useAppSelector(getCartBooks);
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);

  const setAttributeTheme = (themeValue: "light" | "dark") => {
    document.documentElement.setAttribute("theme", `${themeValue}`);
  };

  setAttributeTheme(theme);

  const handleTheme = () => {
    if (theme === "dark") {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }

    setAttributeTheme(theme);
    toggleIsInstallDark();
  };

  const handleBurger = (): void => {
    toggleIsOpen();
  };

  return (
    <WrapperHeader>
      <Container>
        <StyledHeader>
          <Link to={ROUTE.HOME}>
            <ButtonLogo whileHover={{ scale: 1.1 }}>
              <LogoIcon width={width < Breakpoint.MD ? "122" : "137"} fill={Color.Primary} />
            </ButtonLogo>
          </Link>

          {width > Breakpoint.LG && <SearchHeader />}

          <ButtonTheme onClick={handleTheme} whileHover={{ scale: 1.1 }}>
            {isDark ? (
              <MoonIcon width="24" fill={Color.Primary} />
            ) : (
              <SunIcon width="24" fill={Color.Primary} />
            )}
          </ButtonTheme>

          <List>
            <Item key="1">
              <HeaderCustomLink to={ROUTE.FAVORITES}>
                <ButtonFavorites whileHover={{ scale: 1.1 }}>
                  {favoritesBooks.length > 0 ? (
                    <FavoritesActiveIcon width="24" stroke={Color.Primary} />
                  ) : (
                    <FavoritesIcon width="24" stroke={Color.Primary} />
                  )}
                </ButtonFavorites>
              </HeaderCustomLink>
            </Item>

            <Item key="2">
              <HeaderCustomLink to={ROUTE.CART}>
                <ButtonCart whileHover={{ scale: 1.1 }}>
                  {cartBooks.length > 0 ? (
                    <CartActiveIcon width="24" stroke={Color.Primary} />
                  ) : (
                    <CartIcon width="24" stroke={Color.Primary} />
                  )}
                </ButtonCart>
              </HeaderCustomLink>
            </Item>

            <Item key="3">
              <HeaderCustomLink to={ROUTE.ACCOUNT}>
                <ButtonUser whileHover={{ scale: 1.1 }}>
                  <UserIcon width="24" stroke={Color.Primary} />
                </ButtonUser>
              </HeaderCustomLink>
            </Item>
          </List>

          <ButtonBurger whileHover={{ scale: 1.1 }}>
            <BurgerIcon width="28" height="28" fill={Color.Primary} onClick={handleBurger} />
          </ButtonBurger>

          <AnimatePresence>{isOpen && <BurgerMenu handleBurger={handleBurger} />} </AnimatePresence>
        </StyledHeader>
      </Container>
    </WrapperHeader>
  );
};
