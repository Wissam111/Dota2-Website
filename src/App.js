import "./css/style.css";
import React, { Component, Fragment, useState } from "react";
import Header from "./components/Header";

import Home from "./components/pages/Home";
import HerosMain from "./components/pages/HerosMain";
import TeamsMain from "./components/pages/TeamsMain";
import View from "./components/pages/View";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/heros" exact element={<HerosMain />} />
          <Route path="/teams" exact element={<TeamsMain />} />
          <Route path="/view" exact element={<View />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
