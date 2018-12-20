import React from 'react';

const Form = () => (
  <div>
    <p>Check out this form:</p>
    <form style={{ margin: '20px' }} netlify name="contacts">
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="Email" />
      <br/>
      <input type="submit" />
    </form>
  </div>
);

export default Form;
