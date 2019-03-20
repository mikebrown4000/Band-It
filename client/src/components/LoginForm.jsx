import React from 'react';

function LoginForm(props){
  const {
    email,
    password,
    handleChange
    } = props;

    const test = (e) => {
      e.preventDefault();
      console.log(email, password);
    }

  return(
    <div>
      <form>

        <input
        onChange={handleChange}
        type='text'
        placeholder='Email'
        name='email'
        value={email} />

        <input
        onChange={handleChange}
        minLength={4}
        type='password'
        placeholder='Password'
        name='password'
        value={password} />

        <button onClick={test}>Login</button>

        </form>
      </div>
)}

export default LoginForm;
