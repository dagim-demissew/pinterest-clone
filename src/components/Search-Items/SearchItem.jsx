import React from "react";
import "./searchItem.css";

const SearchItem = ({ detail, image }) => {
  return (
    <div className="search-item-container">
      <div className="search-detail">
        <img className="search-image" src={image} alt="" />
        <span className="detail-title">{detail}</span>
      </div>
    </div>
  );
};

export default SearchItem;
