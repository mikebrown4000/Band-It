import React from 'react';

function LoginForm(props){
  const {
    first_name,
    last_name,
    email,
    password,
    handleChange
  } = props;

  return(
<div>
  <form>
    <input
    onChange={handleChange}
    type='text'
    placeholder='First Name'
    name='first_name'
    value={first_name} />

    <input
    onChange={handleChange}
    type='text'
    placeholder='Last Name'
    name='last_name'
    value={last_name} />

    <input
    onChange={handleChange}
    type='text'
    placeholder='Email'
    name='email'
    value={email} />

    <input
    onChange={handleChange}
    type='password'
    placeholder='Password'
    name='password'
    value={password} />

    </form>
  </div>
)};

export default LoginForm;
