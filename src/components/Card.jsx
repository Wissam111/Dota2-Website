import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroView from "./HeroView";
class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.img} alt="" />

        <Link
          className="heroName"
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
