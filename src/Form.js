import React from 'react';

const Form = () => (
  <div>
    <p>Check out this form:</p>
    <form style={{ margin: '20px' }} netlify for="things">
      <input type="text" for="name" placeholder="Name" />
      <input type="text" for="email" placeholder="Email" />
      <br/>
      <input type="submit" />
    </form>
  </div>
);

export default Form;
