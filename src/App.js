import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    // add class methods
    super();

    this.state = {
      isLoggedIn: true,
      swapiData: {}
    };
    this.bindMethods();
  }

  /*
  is invoked immediately after a component is mounted (inserted into the tree). 
  Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, 
  this is a good place to instantiate the network request.
  This method is a good place to set up any subscriptions.
  */
  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({swapiData: data})
        console.log(this.state);
      })
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
        >You are currently logged {status}, {this.state.swapiData.name}</h2>
        <button onClick={this.handleLogin}>Log {status === "in" ? "out":"in"}</button>
      </div>
    );
  }

  handleLogin() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isLoggedIn: !prevState.isLoggedIn,
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
