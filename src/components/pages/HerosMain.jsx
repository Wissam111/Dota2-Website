import React, { Component, Fragment, useState } from "react";
import Cards from "../Cards";

function HerosMain(props) {
  return (
    <Cards
      type={0}
      g={false}
      cards={props.showHeros}
      onSearch={props.onSearch}
    />
  );
}

export default HerosMain;
