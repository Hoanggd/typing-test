import { createSlice } from "@reduxjs/toolkit";
import faker from "faker";

const initialState = {
  coming: [""],
  submited: [],
  currentWord: "",
  warning: false,
  incorectWords: 0,
  isTyping: false,
  timeRemaining: 60,
};

const sentence = createSlice({
  name: "sentence",
  initialState,
  reducers: {
    resetState(state, action) {
      return {
        coming: [""],
        submited: [],
        currentWord: "",
        warning: false,
        incorectWords: 0,
        isTyping: false,
        timeRemaining: 60,
      };
    },
    addComingWord(state, action) {
      let sentence = [];

      for (let i = 0; sentence.length < 100; i++) {
        const word = faker.random.word();
        if (/^[a-zA-Z]{4,10}$/.test(word)) {
          sentence.push(word.toLowerCase());
        }
      }
      state.coming = sentence;
    },
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
      state.currentWord = action.payload.toLowerCase();
    },
    checkCurrentWord(state, action) {
      const value = action.payload.trim().toLowerCase();
      if (value) {
        if (state.coming[0].indexOf(value) === 0) {
          state.warning = false;
        } else {
          state.warning = true;
        }
      }
    },
    changeTimeRemaining(state, action) {
      state.timeRemaining--;
    },
    typing(state, action) {
      state.isTyping = action.payload;
    },
  },
});

export const {
  wordSubmit,
  checkCurrentWord,
  setCurrenWord,
  changeTimeRemaining,
  typing,
  addComingWord,
  resetState,
} = sentence.actions;

export default sentence.reducer;
