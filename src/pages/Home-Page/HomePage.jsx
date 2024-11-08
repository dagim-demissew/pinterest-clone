import { React, useState } from "react";
import { DATA_ITEMS } from "../../util/data";
import { useSelector } from "react-redux";
import { randomGenerator } from "../../util/random";
import Card from "../../components/Card/Card";
import Question from "../../components/Question/Question";
import ProfileSection from "../../components/Profile-Section/ProfileSection";
import SearchOverlay from "../../components/Search-Overlay/SearchOverlay";
import "./homePage.css";

const HomePage = () => {
  const display = useSelector((state) => state.search.displaySearch);

  return (
    <div className="layout">
      {display ? <SearchOverlay /> : <></>}
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
