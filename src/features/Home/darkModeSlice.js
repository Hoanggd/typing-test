import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
  name: "darkMode",
  initialState: JSON.parse(localStorage.getItem("darkMode")) || false,
  reducers: {
    toggleDark: (state) => {
      localStorage.setItem("darkMode", !state)
      return !state
    },
  },
});

export const { toggleDark } = darkMode.actions;

export default darkMode.reducer;
