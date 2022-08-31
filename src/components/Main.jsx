import React, { Component, Fragment } from "react";
import ChooseSection from "./ChooseSection";
class Main extends Component {
  render() {
    console.log("p", this.props);
    return (
      <Fragment>
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
              <a
                className="link-steam"
                href="https://store.steampowered.com/app/570/Dota_2/"
              >
                Play For Free
              </a>
            </div>
          </div>
        </section>
        <ChooseSection />
      </Fragment>
    );
  }
}

export default Main;
