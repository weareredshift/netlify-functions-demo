import React from 'react';

class Requester extends React.Component {
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
      .then(json => { this.setState({ json }) });
  }

  render () {
    const { input, json } = this.state;

    return (
      <div>
        <input
          value={ input }
          onChange={ (e) => { this.setState({ input: e.target.value }) }}
          placeholder="Submit a query string"
          onKeyPress={ event => {
            if (event.key === 'Enter') { this.makeRequest(); }
          }}
        />

        <p>Result:</p>
        { json &&
          <pre>
            { JSON.stringify(json) }
          </pre>
        }
      </div>
    );
  }
}

export default Requester;
