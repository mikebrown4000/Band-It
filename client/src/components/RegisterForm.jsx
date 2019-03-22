import React from 'react';
import {Link} from 'react-router-dom';

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
    artist_description,
    looking,
    handleCheck,
    handleSubmit,
    img,
    register,
  } = props;

  return(
    <div>
      <form onSubmit={handleSubmit}>
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

        {register &&
          <input
          onChange={handleChange}
          type='text'
          placeholder='Email'
          name='email'
          value={email} />
        }

        {register &&
          <input
          onChange={handleChange}
          type='password'
          placeholder='Password'
          name='password'
          value={password} />
        }

        <input
        onChange={handleChange}
        type='text'
        placeholder='Location'
        name='location'
        value={location} />

        <input
        onChange={handleChange}
        type='text'
        placeholder='Instrument'
        name='instrument'
        value={instrument} />

        <input
        onChange={handleChange}
        type='number'
        placeholder='Age'
        name='age'
        value={age} />

        <input
        onChange={handleChange}
        type='text'
        placeholder='Image'
        name='img'
        value={img} />

        <input
        onChange={handleChange}
        type="text"
        placeholder="add your description"
        name="artist_description"
        value={artist_description} />

        <label htmlFor='looking'>Looking For Band? </label>
        <input onClick={handleCheck} type='checkbox' name='looking' value={looking} />
        <input value='Submit' type='submit'/>
        <small><Link to='/login'>Already have an account?</Link></small>
      </form>
    </div>
  )
}

export default RegisterForm;
