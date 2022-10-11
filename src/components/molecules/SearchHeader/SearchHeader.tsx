import Spinner from "react-spinners/ClipLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, CSSProperties } from "react";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import { Error } from "components";
import { SearchIcon, NothingIcon } from "assets";
import { useInput, useDebounce, useWindowSize } from "hooks";
import { ROUTE } from "routes";
import {
  fetchBooksBySearch,
  getBooksBySearch,
  getDebounceSearchValue,
  useAppDispatch,
  useAppSelector,
} from "store";
import { Breakpoint, Color } from "ui";
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

const searchCardVariants = {
  visible: (index: number) => ({ opacity: 1, scale: 1, transition: { delay: index * 0.1 } }),
  hidden: { opacity: 0, scale: 1.2 },
};

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
  const currentPage = useParams().page;

  const currentPageSearch = useMatch(`${ROUTE.SEARCH}${currentPage}`);
  const currentPageFavorites = useMatch(ROUTE.FAVORITES);
  const currentPageCart = useMatch(ROUTE.CART);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDebounceSearchValue(debounceSearchValue));
  }, [debounceSearchValue, dispatch]);

  useEffect(() => {
    !currentPageFavorites &&
      !currentPageCart &&
      dispatch(fetchBooksBySearch({ query: debounceSearchValue, page: 1 }));
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
  }, [currentPageHome, currentPageSearch, setValue]);

  const handleSearchPage = () => {
    !currentPageFavorites && !currentPageCart && navigate(`${ROUTE.SEARCH}1`);
  };

  return (
    <>
      <Search whileHover={{ scale: 1.1 }}>
        <SearchInput placeholder="Search..." onChange={onChange} value={value} />

        <ButtonSearch onClick={handleBurger} whileHover={{ scale: 1.1 }}>
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
                {booksBySearch.map((book, index) => {
                  return (
                    <Link to={`${ROUTE.DETAILS_BOOK}${book.isbn13}`} key={book.isbn13}>
                      <SearchCard
                        whileTap={{ scale: 1.1 }}
                        variants={searchCardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                      >
                        <WrapperImage>
                          <Image src={book.image} alt={book.title} />
                        </WrapperImage>
                        <Title>{book.title}</Title>
                      </SearchCard>
                    </Link>
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
