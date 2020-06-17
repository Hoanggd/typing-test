import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "config";

export const fetchResults = createAsyncThunk(
  "results/fetchResults",
  async () => {
    const results = await axios({
      method: "get",
      baseURL: config.base_url,
      url: "/result",
      params: {
        num: 50,
      },
    });
    return results.data;
  }
);

export const fetchResultsById = createAsyncThunk(
  "results/fetchResultsById",
  async () => {
    const token = localStorage.getItem("token");
    const results = await axios({
      method: "get",
      baseURL: config.base_url,
      url: "/result/history",
      headers: { Authorization: "Bearer " + token },
      params: {
        num: 50,
      },
    });
    return results.data;
  }
);

const results = createSlice({
  name: "results",
  initialState: {
    data: [],
    value: 0
  },
  reducers: {
    setResults: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchResults.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchResultsById.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setResults } = results.actions;
export default results.reducer;
