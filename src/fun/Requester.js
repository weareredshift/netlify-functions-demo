import React from 'react';

class Requester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  makeRequest() {
    const { user } = this.props;
    const { input } = this.state;
    const endpoint = '/.netlify/functions/hello';
    const finalEndpoint = input ? `${endpoint}?input=${input}` : endpoint;

    const headers = {};
    if (user) {
      headers.Authorization = `Authorization: Bearer ${user.token}`;
    }

    fetch(finalEndpoint, { headers })
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
          } }
        />

        <p>Result:</p>
        { json &&
          <pre style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'monospace' }}>
            { JSON.stringify(json, null, 2) }
          </pre>
        }
      </div>
    );
  }
}

export default Requester;
