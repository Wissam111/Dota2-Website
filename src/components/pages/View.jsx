import React, { Component } from "react";
import HeroView from "../HeroView";
import { useLocation } from "react-router-dom";
function View(props) {
  const location = useLocation();
  const { from } = location.state;
  return <HeroView hero={from} />;
}
export default View;
