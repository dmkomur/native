import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config";

export const signin = createAsyncThunk(
  "signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credentials.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const signOut = createAsyncThunk(
//   "auth/signout",
//   async (credentials, thunkAPI) => {
//     try {

//     } catch (error) {

//     }
//   }
// );

// export const changeTheme = createAsyncThunk(
//   "auth/updateTheme",
//   async (selectedOption, thunkAPI) => {
//     try {

//     } catch (error) {

//     }
//   }
// );

// export const currentUser = createAsyncThunk(
//   "auth/current",
//   async (_, thunkAPI) => {
//     const accessToken = localStorage.getItem("accessToken");

//     if (!accessToken) {
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }
//     try {
//       setAuthHeader(accessToken);
//       const { data } = await instance.get("api/auth/current");

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const updateUserProfile = createAsyncThunk(
//   "auth/updateProfile",
//   async ({ name, avatarFile }, thunkAPI) => {
//     const uploadToCloudinary = async (file) => {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', 'thb4n5sd');

//       const response = await fetch('https://api.cloudinary.com/v1_1/doc0gvy9u/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       return data.secure_url;
//     };

//     try {
//       let avatarURL;
//       if (avatarFile) {
//         avatarURL = await uploadToCloudinary(avatarFile);
//       }

//       const { data } = await instance.put("api/auth/updatedata", {
//         name,
//         avatarURL
//       });

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export default instance;
