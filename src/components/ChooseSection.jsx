import React, { Component } from "react";
import { Link } from "react-router-dom";
function ChooseSection() {
  return (
    <section className="chooseSection">
      <div className="container">
        <h1>WHO WILL YOU CHOOSE?</h1>
        <p>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and <br /> devastating ultimates on your way to victory.
        </p>
        <Link to="/heros" className="link-steam">
          VIEW ALL HEROS
        </Link>
      </div>
    </section>
  );
}

export default ChooseSection;
