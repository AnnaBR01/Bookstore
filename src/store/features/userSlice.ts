import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: null | string;
  isAuth: boolean;
  name: null | string;
  email: null | string;
  theme: "ligth" | "dark";
}

const initialState: UserState = {
  id: null,
  isAuth: false,
  name: null,
  email: null,
  theme: "ligth",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<"ligth" | "dark">) {
      state.theme = payload;
    },
  },
});

export default userSlice.reducer;

export const { changeTheme } = userSlice.actions;
