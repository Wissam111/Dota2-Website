import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <section id="hero" className="hero-section">
        <div className="container">
          <video
            className="video-container"
            autoPlay
            preload="auto"
            loop
            playsInline
          >
            <source src={require("../imgs/dotaV.webm")} type="video/webm" />
          </video>
          <div className="hero-content">
            <h1>Dota2</h1>
            <a href="https://store.steampowered.com/app/570/Dota_2/">
              Play For Free
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
