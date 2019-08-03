import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';
import ToDo from './components/ToDo';


class App extends Component {
  constructor(){
    super()

    this.state = {
      tasks: []
    }
  }

  handleAdd = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  render() {
    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <NewTask add={this.handleAdd}/>
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;

