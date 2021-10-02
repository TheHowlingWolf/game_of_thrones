import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import optionReducer from "./optionReducer";

const rootReducer = combineReducers(
  Object.fromEntries(
    Object.entries({
      optionReducer,
      booksReducer,
    }).sort()
  )
);

export default rootReducer;
