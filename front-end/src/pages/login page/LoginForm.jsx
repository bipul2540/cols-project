import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";

const LoginForm = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <div className='button'>
        <Button
          btnText={`Sign in using google`}
          btnIcon={<FcGoogle />}
          className='btn-secondry'
        />
      </div>

      <div className='or__line'>
        <p>or sign in with email </p>
      </div>

      <div className='form__container'>
        <form action=''>
          <div className='form__input'>
            <label htmlFor='email'>Email address</label>
            <input type='text' placeholder='Enter your Email address' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
