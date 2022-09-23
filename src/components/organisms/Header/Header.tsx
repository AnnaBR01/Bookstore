import {
  LogoIcon,
  SunIcon,
  MoonIcon,
  FavoritesIcon,
  CartIcon,
  UserIcon,
  BurgerIcon,
} from "../../../assets";
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
import { ROUTE } from "../../../routes/routes";
import { changeTheme, getUserInfo, useAppDispatch, useAppSelector } from "../../../store";
import { useToggle, useWindowSize } from "../../../hooks";
import { BurgerMenu, HeaderCustomLink, SearchHeader } from "../../index";
import { Breakpoint, Color, Container } from "../../../ui";

export const Header = () => {
  const { theme } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const [isDark, toggleIsInstallDark] = useToggle();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();

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
          <HeaderCustomLink to={ROUTE.HOME}>
            <ButtonLogo>
              <LogoIcon width={width < Breakpoint.MD ? "122" : "137"} fill={Color.Primary} />
            </ButtonLogo>
          </HeaderCustomLink>

          {width > Breakpoint.LG && <SearchHeader />}

          <ButtonTheme onClick={handleTheme}>
            {isDark ? (
              <MoonIcon width="24" fill={Color.Primary} />
            ) : (
              <SunIcon width="24" fill={Color.Primary} />
            )}
          </ButtonTheme>

          <List>
            <Item key="1">
              <HeaderCustomLink to={ROUTE.FAVORITES}>
                <ButtonFavorites>
                  <FavoritesIcon width="24" stroke={Color.Primary} />
                </ButtonFavorites>
              </HeaderCustomLink>
            </Item>

            <Item key="2">
              <HeaderCustomLink to={ROUTE.CART}>
                <ButtonCart>
                  <CartIcon width="24" stroke={Color.Primary} />
                </ButtonCart>
              </HeaderCustomLink>
            </Item>

            <Item key="3">
              <HeaderCustomLink to={ROUTE.SIGN_IN}>
                <ButtonUser>
                  <UserIcon width="24" stroke={Color.Primary} />
                </ButtonUser>
              </HeaderCustomLink>
            </Item>
          </List>

          <ButtonBurger>
            <BurgerIcon width="28" height="28" fill={Color.Primary} onClick={handleBurger} />
          </ButtonBurger>

          {isOpen && <BurgerMenu handleBurger={handleBurger} isOpen={isOpen} />}
        </StyledHeader>
      </Container>
    </WrapperHeader>
  );
};
