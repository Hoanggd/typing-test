import { combineReducers } from "redux";
import darkModeSlice from 'features/Home/darkModeSlice';
import sentenceSlice from 'features/Home/sentenceSlice';

export default combineReducers({
  darkMode: darkModeSlice,
  sentence: sentenceSlice
})
