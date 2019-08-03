import React, { Component } from "react";

class DataArray extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [
        "Hulk",
        "Thor",
        "Iron Man",
        "Captain Marvel",
        "Captain America",
        "Ant-Man"
      ],
      search: ""
    };
  }

  handleSearch = val => {
    this.setState({ search: val });
  };

  render() {
    const { search } = this.state;
    let heroArr = this.state.heroes
      .filter(hero => {
        return hero.toLowerCase().includes(search);
      })
      .map((hero, i) => {
        return <h2 key={i}>{hero}</h2>;
      });
    return (
      <div>
        <input type="text" onChange={e => this.handleSearch(e.target.value)} />
        {heroArr}
      </div>
    );
  }
}

export default DataArray;
