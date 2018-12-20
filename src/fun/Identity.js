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

const Identity = ({ setState, user  }) => {
  const login = () => {
    netlifyAuth.authenticate((response, other) => {
      setState({
        user: {
          name: response.user_metadata.full_name,
          email: response.email,
          token: response.token.access_token
        }
      });
    });
  }

  return (
    user
      ? <p>
        Logged in as {user.name} ({user.email})
      </p>
      : <div onClick={ login }>Login</div>
  );
}


export default Identity;
