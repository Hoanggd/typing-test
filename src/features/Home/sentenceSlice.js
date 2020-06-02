import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coming: "his son quipped that power bars were nothing more than adult candy bars".split(
    " "
  ),
  submited: [],
  currentWord: "",
  warning: false,
  incorectWords: 0,
};

const sentence = createSlice({
  name: "sentence",
  initialState,
  reducers: {
    wordSubmit(state, action) {
      const firstWord = state.coming[0];

      if (state.currentWord.trim() !== firstWord) {
        state.incorectWords += 1;
      }
      state.coming.shift();

      if (state.currentWord.trim() !== firstWord) {
        state.submited.push(`<span class="warning">${action.payload}</span>`);
      } else {
        state.submited.push(action.payload);
      }
      state.warning = false;
    },
    setCurrenWord(state, action) {
      state.currentWord = action.payload;
    },
    checkCurrentWord(state, action) {
      const value = action.payload.trim();
      if (value) {
        if (state.coming[0].indexOf(value) === 0) {
          state.warning = false;
        } else {
          state.warning = true;
        }
      }
    },
  },
});

export const { wordSubmit, checkCurrentWord, setCurrenWord } = sentence.actions;

export default sentence.reducer;
