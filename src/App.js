import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    // add class methods
    super();

    this.state = {
      isLoggedIn: true
    };
    this.bindMethods();
  }

  bindMethods() {
    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    let status = this.state.isLoggedIn ? "in":"out";

    return (
      <div className="App">
        <h2 
          onMouseEnter={this.handleIn}
          onMouseOut={this.handleOut}
        >You are currently logged {status}</h2>
        <button onClick={this.handleLogin}>Log {status === "in" ? "out":"in"}</button>
      </div>
    );
  }

  handleLogin() {
    let loginState = this.state.isLoggedIn ? false:true;
    this.setState({isLoggedIn: loginState});
  }
  
  handleIn() {
    console.log('im in ttheree');
  }
  handleOut() {
    console.log('im outta ttheree');
  }
}

export default App;
