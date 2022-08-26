import React, { Component } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header" className="navbar">
      <div className="nav-links">
        <img className="logo" src={require("../imgs/logoz.png")} alt="" />
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/heros" className="nav-link">
              Heros
            </Link>
          </li>
          <li>
            <Link to="/teams" className="nav-link">
              Teams
            </Link>
          </li>
        </ul>
      </div>
      {/* <img src={require("../imgs/dotaF2.gif")} alt="" /> */}
    </div>
  );
}

export default Header;
