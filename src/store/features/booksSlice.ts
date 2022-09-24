import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookstoreAPI } from "../../services";
import { IBook, IBooks } from "../../types/types";

interface BooksState {
  books: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk<IBooks, undefined, { rejectValue: string }>(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      return await bookstoreAPI.getNew();
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default booksSlice.reducer;

export { fetchBooks };
