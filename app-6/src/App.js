import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      input: ``
    }
  }

  handleChange(val){
    this.setState({ input: val })
  }

  handleClick = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: ``
    })
  }

  render() {
    let tasks = this.state.tasks.map( (val, i) => {
      return(
        <ToDo key={ i } task={ val } />
      )
    })
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input placeholder='Enter a new task' onChange={ (e) => this.handleChange(e.target.value) } value={ this.state.input } />
        <button onClick={ this.handleClick }>Add</button>
        <h3>{ tasks }</h3>
      </div>
    );
  }
}

export default App;
