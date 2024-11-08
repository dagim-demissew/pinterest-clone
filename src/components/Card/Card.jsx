import React from "react";
import User from "../User-Card/User";
import CardImage from "../Card-Image/CardImage";

import { randomGenerator } from "../../util/random";
import "./card.css";

const Card = ({ size, pinterestItem }) => {
  const randomValue = randomGenerator(3);
  return (
    <div className={`layout-card ${size}`}>
      <div className="card-container">
        <CardImage pinterestItem={pinterestItem} />
        {randomValue === 1 ? (
          <User pinterestItem={pinterestItem} />
        ) : randomValue === 2 ? (
          <p className="card-description">{pinterestItem.description}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
