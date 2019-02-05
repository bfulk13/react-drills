import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImg='https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
      </div>
    );
  }
}

export default App;
