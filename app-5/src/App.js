import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          myImage={
            "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          }
        />
      </div>
    );
  }
}

export default App;
