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
        console.log({curernt: state.currentWord} );
        console.log({firstWord})
        state.incorectWords += 1;
      }
      const word = state.coming.shift();
      state.submited.push(word);
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
