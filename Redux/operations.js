import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config";
import { useSelector } from "react-redux";

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
export const signup = createAsyncThunk(
  "signup",
  async ({ email, password }, thunkAPI) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
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

export const signout = createAsyncThunk("signout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateuser = createAsyncThunk(
  "updateuser",
  async ({ login }, thunkAPI) => {
    const user = auth.currentUser;

    if (user) {
      try {
        const result = await updateProfile(user, {
          displayName: login,
        });
        console.log(result);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const createpost = createAsyncThunk(
  "createpost",
  async (
    { name, location, photo, locationName, likes, comments },
    thunkAPI
  ) => {
    try {
      await addDoc(collection(db, "posts"), {
        name,
        location,
        photo,
        locationName,
        likes,
        comments,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getposts = createAsyncThunk("getposts", async (_, thunkAPI) => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return posts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addcomment = createAsyncThunk(
  "addcomment",
  async ({ docId, comment }, thunkAPI) => {
    try {
      const ref = doc(db, "posts", docId);

      await updateDoc(ref, {
        comments: [...comment],
      });
      console.log("document updated");
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const writeDataToFirestore = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "posts"), action.payload);
//     console.log("Document written ", docRef);
//   } catch (e) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };

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
