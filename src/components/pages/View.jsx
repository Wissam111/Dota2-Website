import React, { Component, Fragment } from "react";
import HeroView from "../HeroView";
import { useLocation } from "react-router-dom";
import HeroGraph from "../HeroGraph";

function View(props) {
  const location = useLocation();
  const { from } = location.state;

  return (
    <Fragment>
      <HeroView hero={from} />
      <HeroGraph hero={from} />
    </Fragment>
  );
}
export default View;
