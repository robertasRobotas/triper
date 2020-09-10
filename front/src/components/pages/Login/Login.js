import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from '../../atoms';
import './Login.css';
import Logo from '../../../assets/photos/logo.png';

function Login() {
  return (
    <div>
      <div className='logoWrapper'>
        <img className='logo' alt='lol' src={Logo} />
      </div>

      <div className='socialContainer'>
        <div className={'buttonWrapper'}>
          <GoogleLoginButton />
        </div>
        <div className={'buttonWrapper'}>
          <FacebookLoginButton />
        </div>
      </div>
    </div>
  );
}

export default Login;
