import { searchActions } from "./search-actionTypes";

const INITIAL_STATE = {
  displaySearch: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActions.DISPLAY_SEARCH_OVERLAY:
      return {
        ...state,
        displaySearch: !state.displaySearch,
      };
    default:
      return state;
  }
};
