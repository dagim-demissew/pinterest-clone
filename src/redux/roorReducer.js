import { combineReducers } from "redux";
import { searchReducer } from "./searchbar/search-reducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
