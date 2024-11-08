import { searchActions } from "./search-actionTypes";

export const displaySearch = () => {
  return {
    type: searchActions.DISPLAY_SEARCH_OVERLAY,
  };
};
