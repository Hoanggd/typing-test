import { combineReducers } from "redux";
import darkModeSlice from 'features/Home/darkModeSlice';
import sentenceSlice from 'features/Home/sentenceSlice';
import userSlice from 'features/Auth/userSlice';
import resultsSlice from 'features/Home/resultsSlice';

export default combineReducers({
  darkMode: darkModeSlice,
  sentence: sentenceSlice,
  user: userSlice,
  results: resultsSlice
})
