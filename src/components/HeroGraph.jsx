import React, { Component, useState } from "react";
import Cards from "./Cards";
import dataDota from "../data/dataDota";
import Card from "./Card";
function HeroGraph(props) {
  const { hero } = props;
  let lines = [];
  let nodes = [
    <Card
      type={0}
      key={hero.id}
      name={hero.name}
      img={hero.img}
      card={hero}
      g={true}
    />,
  ];
  function connect(x1, y1, x2, y2, color, thickness) {
    var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    var cx = (x1 + x2) / 2 - length / 2;
    var cy = (y1 + y2) / 2 - thickness / 2;
    var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
    let el = (
      <div
        className="nodet"
        style={{
          padding: "0px",
          margin: "0px",
          height: `${thickness}px`,

          backgroundColor: `${color}`,

          lineHeight: "1px",
          position: "absolute",
          left: `${cx}px`,
          top: `${cy}px`,
          width: `${length}px`,

          MozTransform: `rotate(${angle}deg)`,

          WebkitTransform: `rotate(${angle}deg)`,
          OTransform: `rotate(${angle}deg)`,
          msTransform: `rotate(${angle}deg)`,
          transform: `rotate(${angle}deg)`,
        }}
      />
    );

    return el;
  }

  return (
    <div className="graph-container">
      <div className="nodes-container">
        {hero.to.forEach((herid) => {
          let node = (
            <Card
              type={0}
              key={dataDota[herid - 1].id}
              name={dataDota[herid - 1].name}
              img={dataDota[herid - 1].img}
              card={dataDota[herid - 1]}
              g={true}
            />
          );
          let c = connect(
            hero.x,
            hero.y,
            dataDota[herid - 1].x,
            dataDota[herid - 1].y,
            `white`,
            1.5
          );
          lines.push(c);
          nodes.push(node);
        })}
        {nodes}
        {lines}
      </div>
    </div>
  );
}

export default HeroGraph;
