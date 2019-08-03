import React, { Component } from "react";

export default class Image extends Component {
  render() {
    console.log(this.props.myImage);
    return (
      <div>
        <img src={`${this.props.myImage}`} alt="northern lights" />
      </div>
    );
  }
}
