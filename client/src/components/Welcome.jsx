import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';


function Welcome(props) {
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
      <h1>BandIt</h1>
      <RegisterForm
        handleChange={handleChange}
        onClick={checkLooking}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        location={location}
        instrument={instrument}
        age={age}
        looking={looking}
       />
    </div>
  )
}

export default Welcome;
