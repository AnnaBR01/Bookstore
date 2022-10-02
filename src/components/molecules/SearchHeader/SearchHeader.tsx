import { AnimatePresence } from "framer-motion";
import { useEffect, useState, CSSProperties } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Spinner from "react-spinners/ClipLoader";
import { SearchIcon, NothingIcon } from "../../../assets";
import { useInput, useDebounce, useWindowSize } from "../../../hooks";
import { ROUTE } from "../../../routes/routes";
import {
  fetchBooksBySearch,
  getBooksBySearch,
  getDebounceSearchValue,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import { Breakpoint, Color } from "../../../ui";
import {
  Search,
  ButtonSearch,
  SearchInput,
  SearchList,
  SearchCard,
  WrapperImage,
  Image,
  Title,
  SearchListWrapper,
  Message,
  Word,
  StyledError,
} from "./styles";
import { Error } from "../..";

interface IProps {
  handleBurger?: () => void;
}

const override: CSSProperties = {
  margin: "100px auto",
};

export const SearchHeader = ({ handleBurger }: IProps) => {
  const dispatch = useAppDispatch();
  const { value, onChange, setValue } = useInput();
  const [isOpen, toggleIsOpen] = useState<boolean>(false);
  const { width = 0 } = useWindowSize();
  const debounceSearchValue = useDebounce(value);
  const { booksBySearch, isLoading, error } = useAppSelector(getBooksBySearch);
  const currentPageHome = useMatch(ROUTE.HOME);
  const currentPageSearch = useMatch(ROUTE.SEARCH);
  const currentPageFavorites = useMatch(ROUTE.FAVORITES);
  const currentPageCart = useMatch(ROUTE.CART);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDebounceSearchValue(debounceSearchValue));
  }, [dispatch, debounceSearchValue]);

  useEffect(() => {
    !currentPageFavorites && !currentPageCart && dispatch(fetchBooksBySearch(debounceSearchValue));
  }, [debounceSearchValue, dispatch, currentPageFavorites, currentPageCart]);

  useEffect(() => {
    if (currentPageHome && debounceSearchValue && width > Breakpoint.LG) {
      toggleIsOpen(true);
    } else {
      toggleIsOpen(false);
    }
  }, [debounceSearchValue, width, currentPageHome]);

  useEffect(() => {
    if (!currentPageHome) {
      toggleIsOpen(false);

      if (!currentPageSearch) {
        setValue("");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageHome, currentPageSearch]);

  const handleSearchPage = () => {
    !currentPageFavorites && !currentPageCart && navigate(ROUTE.SEARCH);
  };

  return (
    <>
      <Search>
        <SearchInput placeholder="Search..." onChange={onChange} value={value} />

        <ButtonSearch onClick={handleBurger}>
          <SearchIcon width="20" fill={Color.Secondary} onClick={handleSearchPage} />
        </ButtonSearch>
      </Search>

      <AnimatePresence>
        {isOpen && (
          <SearchListWrapper
            animate={{ height: "50vh" }}
            initial={{ height: "0" }}
            exit={{ height: "0" }}
            transition={{ duration: 0.5 }}
          >
            {isLoading && (
              <Spinner color={Color.Primary} loading={isLoading} cssOverride={override} size={60} />
            )}
            {error && (
              <StyledError>
                <Error value={error} />
              </StyledError>
            )}
            {booksBySearch.length > 0 && (
              <SearchList>
                {booksBySearch.map((book) => {
                  return (
                    <SearchCard key={book.isbn13}>
                      <WrapperImage>
                        <Image src={book.image} alt={book.title} />
                      </WrapperImage>
                      <Title>{book.title}</Title>
                    </SearchCard>
                  );
                })}
              </SearchList>
            )}

            {booksBySearch.length === 0 && (
              <>
                <Message>
                  No results found for <Word>{debounceSearchValue}</Word>
                  <NothingIcon width="50" height="60" fill={Color.Secondary} />
                </Message>
              </>
            )}
          </SearchListWrapper>
        )}
      </AnimatePresence>
    </>
  );
};
