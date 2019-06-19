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
    // class method not auto bind.
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
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isLoggedIn: prevState.isLoggedIn ? false:true,
      }
    });
  }
  
  handleIn() {
    console.log('im in ttheree');
  }
  handleOut() {
    console.log('im outta ttheree');
  }
}

export default App;
