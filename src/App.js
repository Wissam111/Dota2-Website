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
  const [currAttr, setCurrAttr] = useState("All");
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

  const handleAttr = (event) => {
    if (event == "All") {
      setShowHeros(dataDota);
      setCurrAttr("All");
      return;
    }

    let _heros = [];
    dataDota.forEach((hero) => {
      let attr = hero.primary_attr;
      let input = event;
      console.log(event);
      if (attr == input) {
        _heros.push(hero);
      }
    });

    setCurrAttr(event);
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
            element={
              <HerosMain
                onSearch={handeSearch}
                onAttr={handleAttr}
                showHeros={showHeros}
                currAttr={currAttr}
              />
            }
          />
          <Route path="/teams" exact element={<TeamsMain />} />
          <Route path="/view" exact element={<View />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
