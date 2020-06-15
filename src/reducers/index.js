import { combineReducers } from "redux";
import darkModeSlice from 'features/Home/darkModeSlice';
import sentenceSlice from 'features/Home/sentenceSlice';
import userSlice from 'features/Auth/userSlice';

export default combineReducers({
  darkMode: darkModeSlice,
  sentence: sentenceSlice,
  user: userSlice
})
