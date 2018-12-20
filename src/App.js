import React from 'react';
import logo from './logo.svg';
import './App.css';

import Requester from './fun/Requester';
import Identity from './fun/Identity';
import Form from './fun/Form';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Identity />
      <img src={logo} className="App-logo" alt="logo" />
      <p>Let's get started!</p>
      <Requester />
      <Form />
    </header>
  </div>
);

export default App;
