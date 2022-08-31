import React, { Component } from "react";
import Card from "./Card";

function Cards(props) {
  const { type, cards, onSearch, g, w, h } = props;

  return (
    <div className={!g ? "page-wrapper" : "nodesPage"}>
      <div
        className="search-container"
        style={{
          display: !g ? "block" : "none",
        }}
      >
        <div className="attr-container">
          <button
            className={props.currAttr == "All" ? `allBtn activeAttr` : "allBtn"}
            onClick={(e) => {
              props.onAttr("All");
            }}
          >
            <img src={require("../imgs/logoz.png")} alt="" />
          </button>
          <button
            onClick={(e) => {
              props.onAttr("str");
            }}
            className={props.currAttr == "str" ? `strBtn activeAttr` : "strBtn"}
          >
            <img src={require("../imgs/str.jpg")} alt="" />
          </button>
          <button
            onClick={(e) => {
              props.onAttr("int");
            }}
            className={props.currAttr == "int" ? `intBtn activeAttr` : "intBtn"}
          >
            <img src={require("../imgs/int.jpg")} alt="" />
          </button>
          <button
            onClick={(e) => {
              props.onAttr("agi");
            }}
            className={props.currAttr == "agi" ? `agiBtn activeAttr` : "agiBtn"}
          >
            <img src={require("../imgs/agi.jpg")} alt="" />
          </button>
        </div>
        <div className="wrapper">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={onSearch}
          />
        </div>
      </div>
      <div className={!g ? "cards-container" : "nodes-container"}>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            img={type ? card.logo_url : card.img}
            type={type}
            card={card}
            w={w}
            h={h}
            g={g}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
