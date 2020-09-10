import React from "react";
import { ReactComponent as UsersLogo } from "../../assets/svg/users2.svg";

import "./Register.css";

export default function Register() {
  return (
    <div className='register-container'>
      <form>
        <div className='icon'>
          <UsersLogo />
        </div>

        <div className='formcontainer'>
          <div className='container'>
            <label htmlFor='userId'>
              <strong>username</strong>
            </label>
            <input
              type='text'
              placeholder='enter username'
              name='userId'
              required
            />

            <label htmlFor='email'>
              <strong>email</strong>
            </label>
            <input
              type='text'
              placeholder='enter email'
              name='email'
              required
            />

            <label htmlFor='password'>
              <strong>password</strong>
            </label>
            <input
              type='password'
              placeholder='enter_password'
              name='password'
              required
            />

            <label htmlFor='confirmpassword'>
              <strong>confirm password</strong>
            </label>
            <input
              type='password'
              placeholder='confirm password'
              name='confirmpassword'
              required
            />
          </div>

          <button type='submit'>
            <strong>submit</strong>
          </button>
        </div>
      </form>
    </div>
  );
}
