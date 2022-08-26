import React, { Component } from "react";
import Card from "./Card";

function Cards(props) {
  const { id, cards, onSearch } = props;

  return (
    <div className="page-wrapper">
      <div className="search-container">
        <div className="wrapper">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={onSearch}
          />
        </div>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={id ? card.name : card.localized_name}
            img={id ? card.logo_url : `https://api.opendota.com${card.img}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
