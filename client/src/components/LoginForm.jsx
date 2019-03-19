import React from 'react';

function LoginForm(props){
  const {
    email,
    password,
    handleChangeLogin,
    formErrors
  } = props;

  const formValid = () => {
    let valid = true;


  }
  const handleSubmitLogin = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(email, password);
    if(formValid(this.state.formErrors)){
      console.log(`-- SUBMITTING -- Email: ${email} Password: ${password} `);
    }
  }

  handleChangeLogin = (e) => {
    e.preventDefault();

  }
  return(
<div>
  <form noValidate onSubmit={handleSubmitLogin}>
    <input
    onChange={handleChangeLogin}
    type='text'
    placeholder='Email'
    name='email'
    value={email} />

    <input
    onChange={handleChangeLogin}
    type='password'
    placeholder='Password'
    name='password'
    value={password} />

    <input
    type='submit' />

    </form>
  </div>
)};

export default LoginForm;
