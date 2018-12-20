import React from 'react';
import netlifyIdentity from "netlify-identity-widget";

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

class Identity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    netlifyAuth.authenticate((response) => {
      console.log(response);
      this.setState({
        user: { name: response.user_metadata.full_name, email: response.email }
      });
    });
  }

  render () {
    const { user } = this.state;
    return (
      <div>
        { user
          ? <div>
            <p>User:</p>
            <pre>{ JSON.stringify(user) }</pre>
          </div>
          : <div onClick={ this.login.bind(this) }>Login</div>
        }
      </div>
    );

  }
}


export default Identity;
