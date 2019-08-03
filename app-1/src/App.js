// import React, { useState, useRef } from 'react';
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ``
    };
  }

  handleChange = val => {
    this.setState({ text: val });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="type something"
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default App;
