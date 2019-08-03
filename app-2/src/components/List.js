import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();

    this.state = {
      superheroes: [
        "Hulk",
        "Thor",
        "Iron Man",
        "Captain Marvel",
        "Captain America",
        "Ant-Man"
      ]
    };
  }

  render() {
    let heroArray = this.state.superheroes.map(hero => {
      return <h2 key={hero}>{hero}</h2>;
    });
    return <div className="List">{heroArray}</div>;
  }
}

export default List;
