import React, { Component, useState, useRef } from "react";
import dataDota from "../data/dataDota";
import Card from "./Card";
function HeroGraph(props) {
  const { hero } = props;
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isGood, setGood] = useState(0);
  const [herosAgainst, setHerosAgainst] = useState([]);

  React.useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
    setHerosAgainst(hero.to);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      setHeight(ref.current.offsetHeight);
      setWidth(ref.current.offsetWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  function findBG(desiArr) {
    let temp = [];
    dataDota.forEach((hero) => {
      if (desiArr.includes(hero.name)) {
        temp.push(hero.id);
      }
    });
    return temp;
  }

  function handleSwitch() {
    console.log("s", isGood);
    setGood(!isGood);
    let temp = !isGood ? findBG(hero.good_against) : findBG(hero.bad_against);
    setHerosAgainst(temp);
  }

  const x = width / 2;
  const y = height / 6;
  let lines = [];
  let nodes = [
    <Card
      type={0}
      key={hero.id}
      name={hero.name}
      img={hero.img}
      card={hero}
      x={x}
      y={y}
      g={true}
      cn={"active"}
    />,
  ];
  function connect(x1, y1, x2, y2, color, thickness) {
    var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    var cx = (x1 + x2) / 2 - length / 2;
    var cy = (y1 + y2) / 2 - thickness / 2;
    var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
    let el = (
      <div
        className="line"
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

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div className="graph-container">
      <div ref={ref} className="nodes-container">
        {herosAgainst.forEach((herid) => {
          let enX = getRandom(20, width - 100);
          let enY = getRandom(20, height - 100);
          let node = (
            <Card
              type={0}
              key={dataDota[herid - 1].id}
              name={dataDota[herid - 1].name}
              img={dataDota[herid - 1].img}
              card={dataDota[herid - 1]}
              x={enX}
              y={enY}
              g={true}
              cn={isGood ? "notActive-bad" : "notActive-good"}
            />
          );
          let c = connect(x, y, enX, enY, `black`, 1.5);
          lines.push(c);
          nodes.push(node);
        })}
        {nodes}
        {lines}
      </div>
      <div className="counter-picker">
        <h1>Counter Picker Graph</h1>
        <button
          className={isGood ? "badBtn" : "goodBtn"}
          onClick={handleSwitch}
        >
          {isGood ? "Bad Against" : "Good Against"}
        </button>
      </div>
    </div>
  );
}

export default HeroGraph;
