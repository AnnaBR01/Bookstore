import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookstoreAPI } from "services";
import { IBook, IBookResponseBySearch } from "types/types";

interface SearchBooksState {
  booksBySearch: IBook[];
  isLoading: boolean;
  error: null | string;
  debounceSearchValue: string;
}

const initialState: SearchBooksState = {
  booksBySearch: [],
  isLoading: false,
  error: null,
  debounceSearchValue: "",
};

const fetchBooksBySearch = createAsyncThunk<
  IBookResponseBySearch,
  { query: string; page: number },
  { rejectValue: string }
>("search/fetchBooksBySearch", async ({ query, page }, { rejectWithValue }) => {
  try {
    return await bookstoreAPI.getBooksBySearch({ query, page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getDebounceSearchValue(state, { payload }: PayloadAction<string>) {
      state.debounceSearchValue = payload;
    },

    resetDebounceSearchValue(state) {
      state.debounceSearchValue = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.books) {
        state.booksBySearch = payload.books;
      }
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;

export { fetchBooksBySearch };

export const { getDebounceSearchValue, resetDebounceSearchValue } = searchSlice.actions;
