import React from 'react';

function RegisterForm(props) {
  const {
    handleChange,
    firstName,
    lastName,
    email,
    password,
    location,
    instrument,
    age,
    looking,
    checkLooking
  } = props;

  return(
    <div>
      <form>
        <input onChange={handleChange} type='text' placeholder='Fist Name' name='firstName' value={firstName} />
        <input onChange={handleChange} type='text' placeholder='Last Name' name='lastName' value={lastName} />
        <input onChange={handleChange} type='text' placeholder='Email' name='email' value={email} />
        <input onChange={handleChange} type='text' placeholder='Password' name='password' value={password} />
        <input onChange={handleChange} type='text' placeholder='Location' name='location' value={location} />
        <input onChange={handleChange} type='text' placeholder='Instrument' name='instrument' value={instrument} />
        <input onChange={handleChange} type='number' placeholder='Age' name='age' value={age} />
        <label htmlFor='looking'>Looking For Band? </label>
        <input checkLooking={checkLooking} type='checkbox' name='looking' value={looking} />
        <input value='CREATE ACCOUNT' type='submit'/>
      </form>
    </div>
  )
}

export default RegisterForm;
