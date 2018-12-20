import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  makeRequest() {
    const { input } = this.state;
    const endpoint = '/.netlify/functions/hello';
    const finalEndpoint = input ? `${endpoint}?input=${input}` : endpoint;

    fetch(finalEndpoint)
      .then(response => response.json())
      .then(result => {
        this.setState({ result })
      })
  }

  render() {
    const { result, input } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <input
            value={ input }
            onChange={ (e) => { this.setState({ input: e.target.value }) }}
            placeholder="Submit a query string"
            onKeyPress={ event => {
              if (event.key === 'Enter') {
                this.makeRequest();
              }
            }}
          />

          <p>Result:</p>
          { result &&
            <pre>
              { JSON.stringify(result) }
            </pre>
          }
        </header>
      </div>
    );
  }
}

export default App;
