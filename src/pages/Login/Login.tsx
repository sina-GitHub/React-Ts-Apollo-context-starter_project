import React from "react";
import { ReactComponent as UsersLogo } from "../../assets/svg/users2.svg";

import "./Login.css";

export default function Login() {
  return (
    <div className='login-container'>
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
              placeholder='entere mail'
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
          </div>
          <button type='submit'>
            <strong>submit</strong>
          </button>
        </div>
      </form>
    </div>
  );
}
