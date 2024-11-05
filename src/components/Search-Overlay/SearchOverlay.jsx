import React from "react";
import SearchDropdown from "../Search-Dropdown/SearchDropdown";
import "./searchOverlay.css";
const SearchOverlay = () => {
  return (
    <div className="search-overlay">
      <SearchDropdown />
    </div>
  );
};

export default SearchOverlay;
