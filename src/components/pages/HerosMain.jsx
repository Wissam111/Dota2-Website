import React, { Component, Fragment, useState } from "react";
import Cards from "../Cards";

function HerosMain() {
  const [showHeros, setShowHeros] = useState([]);
  const [herosData, setHerosData] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.opendota.com/api/heroStats");
      const data = await res.json();
      setHerosData(data);
      setShowHeros(data);
    }

    getData();
  }, []);

  const handeSearch = (event) => {
    let _heros = [];

    herosData.forEach((hero) => {
      if (
        hero.localized_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        _heros.push(hero);
      }
    });

    setShowHeros(_heros);
  };

  return <Cards id={0} cards={showHeros} onSearch={handeSearch} />;
}

export default HerosMain;
