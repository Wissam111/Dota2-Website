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
