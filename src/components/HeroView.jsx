import React, { Component } from "react";
function HeroView(props) {
  const { id, primary_attr, attack_type, roles, url } = props.hero;
  function getAttrImg() {
    if (primary_attr == "int") {
      return require("../imgs/int.jpg");
    } else if (primary_attr == "str") {
      return require("../imgs/str.jpg");
    } else {
      return require("../imgs/agi.jpg");
    }
  }
  return (
    <div className="view-container">
      <div className="view-content">
        <ul className="view-cols">
          <li className="logoAttrCont">
            <h3>Attribute</h3>
            <img className="attrLogo" src={getAttrImg()} alt="" />
          </li>
          <li>
            <h3>Attack Type</h3>

            <p>{attack_type}</p>
          </li>
          <li>
            <h3>Roles</h3>
            <p>{roles.join(",\n")}</p>
          </li>
        </ul>
      </div>
      <div className="heroVideo-container">
        <video className="hero-video" autoPlay preload="auto" loop playsInline>
          <source src={url} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default HeroView;
