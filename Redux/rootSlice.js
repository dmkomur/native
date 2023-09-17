import { createSlice } from "@reduxjs/toolkit";
import {
  signin,
  signup,
  signOut,
  changeTheme,
  currentUser,
  updateUserProfile,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: null,
  posts: null,
  error: null,
  isLoading: false,
};

const rootSlice = createSlice({
  name: "main",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleRejected)
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});

export const rootReducer = rootSlice.reducer;
