import React from "react";
import Card from "../../components/Card/Card";
import DATA_ITEMS from "../../util/data";
import { randomGenerator } from "../../util/random";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="layout">
      {DATA_ITEMS.map((data) => (
        <Card
          key={data.id}
          size={`${
            randomGenerator(4) === 1
              ? "small"
              : randomGenerator(4) === 2
              ? "medium"
              : randomGenerator(4) === 3
              ? "large"
              : "extra-large"
          }`}
          pinterestItem={data}
        />
      ))}
    </div>
  );
};

export default HomePage;
