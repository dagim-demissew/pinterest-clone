import React from "react";
import "./searchDropdown.css";
import SearchItem from "../Search-Items/SearchItem";
import { SEARCH_DATA, POPULAR } from "../../util/data.js";
import { Close } from "@mui/icons-material";

const SearchDropdown = () => {
  return (
    <div className="search-dropdown-container">
      <div className="search-top">
        <span className="recent-title">Recent searches</span>
        <div className="search-fields">
          <div className="search-field">
            <span>sports car bugati</span>
            <Close />
          </div>
          <div className="search-field">
            <span>Famous Actors of the year</span>
            <Close />
          </div>
          <div className="search-field">
            <span>Natural sunsets</span>
            <Close />
          </div>
        </div>
      </div>

      <div className="search-middle">
        <span className="recent-title">Ideas for you</span>
        <div className="search-items-container">
          {SEARCH_DATA.map((item) => (
            <SearchItem
              keu={item.detail}
              detail={item.detail}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="search-middle">
        <span className="recent-title">Popular on Pinterest</span>
        <div className="search-items-container">
          {POPULAR.map((item) => (
            <SearchItem
              keu={item.detail}
              detail={item.detail}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
