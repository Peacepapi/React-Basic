import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    // add class methods
    super();

    this.state = {
      loading: false,
      isLoggedIn: true,
      swapiData: {},
      firstName: "",
      lastName: "",
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
    this.setState({loading: true});
    setTimeout(() => {
      fetch("https://swapi.co/api/people/1")
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({swapiData: data, loading: false})
        console.log(this.state);
      })
    }, 2000)
    
  }

  bindMethods() {
    // class method not auto bind.
    this.handleLogin = this.handleLogin.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  render() {
    let status = this.state.isLoggedIn ? "in":"out";

    return (
      <div className="App">
        
            {this.state.loading ? <h2>Loading...</h2>:
            <div>
              <h2 onMouseEnter={this.handleIn} onMouseOut={this.handleOut}
                >You are currently logged {status}, {this.state.swapiData.name}</h2>
              <button onClick={this.handleLogin}>Log {status === "in" ? "out":"in"}</button>
              <br></br>
              <input onChange={this.handleFormChange} name="firstName" value={this.state.firstName} type="text" placaeholder="Type something..."></input>
              <input onChange={this.handleFormChange} name="lastName" value={this.state.lastName} type="text" placaeholder="Type something..."></input>              
              <h2>{this.state.firstName} {this.state.lastName}</h2>
            </div>
            }
        
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
  handleFormChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
}

export default App;
