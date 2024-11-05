import React from "react";
import Card from "../../components/Card/Card";
import Question from "../../components/Question/Question";
import { DATA_ITEMS } from "../../util/data";
import Lowbar from "../../components/Lowbar/Lowbar";
import SearchOverlay from "../../components/Search-Overlay/SearchOverlay";
import { randomGenerator } from "../../util/random";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="layout">
     
      <Question />
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
