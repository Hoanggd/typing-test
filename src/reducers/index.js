import { combineReducers } from "redux";
import darkModeSlice from 'features/Home/darkModeSlice'

export default combineReducers({
  darkMode: darkModeSlice
})
