import React from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleSubmit = e => {
    const { user } = this.props;
    const data = {
      "form-name": "message",
      ...this.state
    };

    if (user) {
      data.user = user;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data)
    }).then((response) => {
      console.log("Success!", response);
      this.setState({
        message: '',
        email: '',
        name: ''
      });
    })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default Form;
