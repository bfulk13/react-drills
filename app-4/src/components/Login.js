import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = val => {
    this.setState({ username: val });
  };

  handlePassword = val => {
    this.setState({ password: val });
  };

  handleClick = () => {
    let { username } = this.state;
    let { password } = this.state;
    alert(`Username: ${username} Password: ${password}`);
  };

  render() {
    return (
      <div className="Login-container">
        <input
          type="text"
          placeholder="username"
          onChange={e => this.handleUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={e => this.handlePassword(e.target.value)}
        />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Login;
