import "./css/style.css";
import React, { Component, Fragment, useState } from "react";
import Header from "./components/Header";

import Home from "./components/pages/Home";
import HerosMain from "./components/pages/HerosMain";
import TeamsMain from "./components/pages/TeamsMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // const [heros, setHeros] = useState([]);
  // const [teams, setTeams] = useState([]);

  // React.useEffect(() => {
  //   fetch("https://api.opendota.com/api/heroStats")
  //     .then((res) => res.json())
  //     .then((data) => setHeros(data));
  //   fetch("https://api.opendota.com/api/teams")
  //     .then((res) => res.json())
  //     .then((data) => setHeros(data));
  // }, []);

  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/heros" exact element={<HerosMain />} />
          <Route path="/teams" exact element={<TeamsMain />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
