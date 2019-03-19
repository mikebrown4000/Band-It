import React from 'react';

function RegisterForm(props) {
  const {
    handleChange,
    first_name,
    last_name,
    email,
    password,
    location,
    instrument,
    age,
    looking,
    handleCheck,
    handleSubmit
  } = props;

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' placeholder='First Name' name='first_name' value={first_name} />
        <input onChange={handleChange} type='text' placeholder='Last Name' name='last_name' value={last_name} />
        <input onChange={handleChange} type='text' placeholder='Email' name='email' value={email} />
        <input onChange={handleChange} type='text' placeholder='Password' name='password' value={password} />
        <input onChange={handleChange} type='text' placeholder='Location' name='location' value={location} />
        <input onChange={handleChange} type='text' placeholder='Instrument' name='instrument' value={instrument} />
        <input onChange={handleChange} type='number' placeholder='Age' name='age' value={age} />
        <label htmlFor='looking'>Looking For Band? </label>
        <input onClick={handleCheck} type='checkbox' name='looking' value={looking} />
        <input value='CREATE ACCOUNT' type='submit'/>
      </form>
    </div>
  )
}

export default RegisterForm;
