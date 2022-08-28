import "./css/style.css";
import React, { Component, Fragment, useState } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import HerosMain from "./components/pages/HerosMain";
import TeamsMain from "./components/pages/TeamsMain";
import View from "./components/pages/View";
// import dataDota from "../../data/dataDota";
import dataDota from "./data/dataDota";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [showHeros, setShowHeros] = useState(dataDota);
  // function getRandom(min, max) {
  //   return Math.random() * (max - min) + min;
  // }
  // function getD() {
  //   dataDota.forEach((hero) => {
  //     let arr = [];
  //     for (let i = 0; i < dataDota.length; i++) {
  //       if (hero.bad_against.includes(dataDota[i].name)) {
  //         arr.push(dataDota[i].id);
  //       }
  //     }

  //     const coordinates = {
  //       x: getRandom(10, 1803),
  //       y: getRandom(10, 869),
  //       to: arr,
  //     };
  //     Object.assign(hero, coordinates);
  //   });
  //   console.log(JSON.stringify(dataDota));
  // }

  // getD();
  const handeSearch = (event) => {
    let _heros = [];
    dataDota.forEach((hero) => {
      let name = hero.name.replace(/\W/g, "").toLowerCase();
      let input = event.target.value.replace(/\W/g, "").toLowerCase();
      if (name.includes(input)) {
        _heros.push(hero);
      }
    });

    setShowHeros(_heros);
  };

  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home data={dataDota} onSearch={handeSearch} />}
          />
          <Route
            path="/heros"
            exact
            element={<HerosMain onSearch={handeSearch} showHeros={showHeros} />}
          />
          <Route path="/teams" exact element={<TeamsMain />} />
          <Route path="/view" exact element={<View />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
