import React from "react";
import Overlay from "../Card-Overlay/Overlay";
import "./cardImage.css";
const CardImage = ({ pinterestItem }) => {
  return (
    <div className="card-image-container">
      <img className="card-image" src={pinterestItem.image} alt="" />
      <Overlay />
    </div>
  );
};

export default CardImage;
