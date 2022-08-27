import React, { Component, Fragment, useState } from "react";
import Cards from "../Cards";
import data from "../../data/herosData";
function HerosMain() {
  const [showHeros, setShowHeros] = useState(data);
  console.log(data[0].bad_against)
  const handeSearch = (event) => {
    let _heros = [];
    data.forEach((hero) => {
      let name = hero.name.replace(/\W/g, '').toLowerCase();
      let input = event.target.value.replace(/\W/g, '').toLowerCase();
      if (
        name 
          .includes(input)
      ) {
        _heros.push(hero);
      }
    });

    setShowHeros(_heros);
  };

  return <Cards id={0} cards={showHeros} onSearch={handeSearch} />;
}

export default HerosMain;
