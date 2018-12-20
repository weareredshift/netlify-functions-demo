import React from 'react';
import netlifyIdentity from "netlify-identity-widget";

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

    const request = (headers) => {
      fetch(finalEndpoint, { headers })
          .then(response => response.json())
          .then(json => { this.setState({ json }) });
    };

    const currentUser = netlifyIdentity.currentUser()

    if (currentUser) {
      currentUser.jwt().then(token => {
        const headers = { Authorization: `Bearer ${token}` };
        request(headers);
      });
    } else {
      request();
    }

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
