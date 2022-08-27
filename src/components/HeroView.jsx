import React, { Component } from "react";

function HeroView(props) {
  const { primary_attr } = props.hero;

  return (
    <div className="view-container">
      <div className="view-circle"></div>
      <div className="view-content">
        <ul className="view-cols">
          <li>
            <p>{primary_attr}</p>

            <img src={require("../imgs/agi.jpg")} alt="" />
          </li>
          <li>
            <p>Attack Type</p>
            <p>Mele</p>
          </li>
          <li>
            <p>Roles</p>
            <p>{"Carry, Escape, Nucker"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroView;
