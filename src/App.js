import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Requester from './fun/Requester';
// import Identity from './fun/Identity';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    const { user } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ marginBottom: '40px' }}>Let's get started!</p>
          { /* <Identity setState={ this.setState.bind(this) } user={ user }/> */ }
          { /* <Requester user={ user } /> */ }
        </header>
      </div>
    );
  }
};

export default App;
