import { createSlice } from "@reduxjs/toolkit";
import { signin, signup, signout, updateuser } from "./operations";

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
        state.error = null;
      })
      .addCase(signup.pending, handlePending)
      .addCase(signup.rejected, handleRejected)
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signout.pending, handlePending)
      .addCase(signout.rejected, handleRejected)
      .addCase(signout.fulfilled, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const rootReducer = rootSlice.reducer;
