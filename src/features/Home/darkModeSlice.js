import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
  name: "darkMode",
  initialState: localStorage.theme || false,
  reducers: {
    toggleDark: (state) => !state,
  },
});

export const { toggleDark } = darkMode.actions;

export default darkMode.reducer;
