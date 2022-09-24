import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError, FirebaseErrorCode, getFirebaseMessage } from "../../utils";

interface UserState {
  isAuth: boolean;
  email: string;
  isPendingAuth: boolean;
  error: null | FirebaseError;
  creationTime: string;
  lastSignInTime: string;
  theme: "light" | "dark";
}

const initialState: UserState = {
  isAuth: false,
  email: "",
  isPendingAuth: false,
  error: null, // TODO в будущем ошибки не класть в localstorage
  creationTime: "",
  lastSignInTime: "",
  theme: "light",
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string; lastSignInTime: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;
    const lastSignInTime = userCredential.user.metadata.lastSignInTime as string;

    return { userEmail, creationTime, lastSignInTime };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { userEmail: string; lastSignInTime: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const lastSignInTime = userCredential.user.metadata.lastSignInTime as string;

    return { userEmail, lastSignInTime };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

// export const fetchSignOut = createAsyncThunk<undefined, { rejectValue: FirebaseError }>(
//   "user/fetchSignOut",
//   async (_, { rejectWithValue }) => {
//     try {
//       await getAuth().signOut();
//     } catch (error) {
//       const firebaseError = error as { code: FirebaseErrorCode };

//       return rejectWithValue(getFirebaseMessage(firebaseError.code));
//     }
//   },
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<"light" | "dark">) {
      state.theme = payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.lastSignInTime = payload.lastSignInTime;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.lastSignInTime = payload.lastSignInTime;
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    // builder.addCase(fetchSignOut.pending, (state) => {
    //   state.isPendingAuth = true;
    //   state.isAuth = true;
    //   state.error = null;
    // });
    // builder.addCase(fetchSignOut.fulfilled, (state) => {
    //   state.isPendingAuth = false;
    //   state.error = null;
    //   state.isAuth = false;
    // });
    // builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
    //   if (payload) {
    //     state.isPendingAuth = false;
    //     state.error = payload;
    //     state.isAuth = true;
    //   }
    // });
  },
});

export default userSlice.reducer;

export const { changeTheme } = userSlice.actions;
