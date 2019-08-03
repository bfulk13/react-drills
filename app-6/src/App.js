import React, { Component } from "react";
import "./App.css";
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ``,
      tasks: []
    };
  }

  handleInput = val => {
    this.setState({ input: val });
  };

  handleSubmit = () => {
    const {input, tasks} = this.state
    this.setState({
      tasks: [...tasks, input],
      input: ""
    })
    console.log(tasks, input)
  }

  render() {
    const {tasks} = this.state;
    let taskList = tasks.map((task, i) => {
      return <ToDo key={i} task={task}/>
    })
    return (
      <div className="App">
        <h1>To Do List:</h1>
        <input type="text" onChange={e => this.handleInput(e.target.value)} value={this.state.input} />
        <button onClick={ this.handleSubmit }>Submit</button>
        <br />
        <h3>{taskList}</h3>
      </div>
    );
  }
}

export default App;
