import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card-container">
        <img src={this.props.img} alt="" />
        <h1 className="heroName">{this.props.name}</h1>
      </div>
    );
  }
}

export default Card;
