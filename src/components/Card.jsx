import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroView from "./HeroView";
class Card extends Component {
  render() {
    return (
      <div
        id={this.props.key}
        className={!this.props.g ? "card-container" : "node-container"}
        style={{
          position: this.props.g ? "absolute" : "",
          left: this.props.g ? this.props.card.x + "px" : "",
          top: this.props.g ? this.props.card.y + "px" : "",
        }}
      >
        <img src={this.props.img} alt="" />

        <Link
          className={!this.props.g ? "heroName" : "nodeName"}
          to={!this.props.type ? "/view" : `/`}
          state={{ from: this.props.card }}
        >
          {this.props.name + " "}

          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }
}

export default Card;
