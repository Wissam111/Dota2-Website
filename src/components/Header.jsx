import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [clickNav, setClickNav] = useState(0);

  return (
    <div id="header" className="navbar">
      <img className="logo" src={require("../imgs/logoz.png")} alt="" />

      <div className={clickNav ? "list-navMobile" : "nav-links"}>
        <ul className="list-nav">
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
        <div className="right-nav">
          <a
            className="link-steam"
            href="https://steamcommunity.com/oauth/login?client_id=9B2C1229&response_type=token&state=home"
          >
            Login <i class="fa fa-steam-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <button
        className={clickNav ? "close navBtn" : "menu navBtn"}
        onClick={() => {
          setClickNav(!clickNav);
        }}
      >
        <i className={clickNav ? `fa fa-times` : `fa fa-bars`}></i>
      </button>
    </div>
  );
}

export default Header;
