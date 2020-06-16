import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "config";

export const fetchFbUser = createAsyncThunk(
  "user/fetchFbUser",
  async (response) => {
    const serverResponse = await axios({
      method: "post",
      baseURL: config.base_url,
      url: "/login/facebook",
      data: response,
    });
    return serverResponse.data;
  }
);

export const fetchUserByToken = createAsyncThunk(
  "/user/fetchUserByToken",
  async (token) => {
    const serverResponse = await axios({
      method: "post",
      baseURL: config.base_url,
      url: "/login/token",
      headers: { Authorization: "Bearer " + token },
    });
    return serverResponse.data;
  }
);

const initialState = {
  name: "",
  photoUrl: "",
  _id: ""
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { name, photoUrl }) => {
      return { name, photoUrl };
    },
  },
  extraReducers: {
    [fetchFbUser.fulfilled]: (state, action) => {
      const { name, photoUrl, token } = action.payload;

      localStorage.setItem("token", token);
      return { name, photoUrl };
    },
    [fetchUserByToken.fulfilled]: (state, action) => {
      const { name, photoUrl, _id } = action.payload;
      return { name, photoUrl, _id };
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
