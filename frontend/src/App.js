import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { data: '' }

  handleClick = async () => {
    console.log('hey')
    const { data } = await axios.get('http://localhost:3001/hello') 
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleClick}> get data </button>
          <p>data: { this.state.data }</p>
        </header>
      </div>
    );
  }
}

export default App;
