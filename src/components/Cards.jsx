import React, { Component } from "react";
import Card from "./Card";

function Cards(props) {
  const { type, cards, onSearch } = props;

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
            name={card.name}
            img={type ? card.logo_url:card.img}
            type={type}
            card={card}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
